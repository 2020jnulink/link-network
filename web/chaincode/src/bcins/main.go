package main

import (
	"fmt"

	"encoding/json"

	"github.com/hyperledger/fabric/core/chaincode/shim"
	pb "github.com/hyperledger/fabric/protos/peer"
)

const prefixContractType = "contract_type"
const prefixContract = "contract"
const prefixClaim = "claim"
const prefixUser = "user"
const prefixRepairOrder = "repair_order"

var logger = shim.NewLogger("main")

type SmartContract struct {
}

//맵 리터럴로 string을 키, 값은 자료형이 func(shim.ChaincodeStubInterface, []string) pb.Response형태의 인터페이스를 가진 함수로  만든 것이다. <=
var bcFunctions = map[string]func(shim.ChaincodeStubInterface, []string) pb.Response{
	// Insurance Peer
	"contract_type_ls":         listContractTypes,
	"contract_type_create":     createContractType,
	"contract_type_set_active": setActiveContractType,
	"contract_ls":              listContracts,
	"claim_ls":                 listClaims,
	"claim_file":               fileClaim,
	"claim_process":            processClaim,
	"user_authenticate":        authUser,
	"user_get_info":            getUser,
	// Shop Peer
	"contract_create": createContract,
	"user_create":     createUser,
	// Repair Shop Peer
	"repair_order_ls":       listRepairOrders,
	"repair_order_complete": completeRepairOrder,
	// Police Peer
	"theft_claim_ls":      listTheftClaims,
	"theft_claim_process": processTheftClaim,
}

// Init callback representing the invocation of a chaincode
func (t *SmartContract) Init(stub shim.ChaincodeStubInterface) pb.Response {
	_, args := stub.GetFunctionAndParameters()

	if len(args) == 1 {
		var contractTypes []struct {
			UUID string `json:"uuid"`
			//이거 뭔지는 data.go파일에있음
			*ContractType
		}
		err := json.Unmarshal([]byte(args[0]), &contractTypes)
		if err != nil {
			return shim.Error(err.Error())
		}
		for _, ct := range contractTypes {
			//prefixContractType와 ct.UUID로 복합키 구성
			contractTypeKey, err := stub.CreateCompositeKey(prefixContractType, []string{ct.UUID})
			if err != nil {
				return shim.Error(err.Error())
			}
			contractTypeAsBytes, err := json.Marshal(ct.ContractType)
			if err != nil {
				return shim.Error(err.Error())
			}
			err = stub.PutState(contractTypeKey, contractTypeAsBytes)
			if err != nil {
				return shim.Error(err.Error())
			}
		}
	}
	return shim.Success(nil)
}

// Invoke Function accept blockchain code invocations.
func (t *SmartContract) Invoke(stub shim.ChaincodeStubInterface) pb.Response {
	function, args := stub.GetFunctionAndParameters()

	if function == "init" {
		return t.Init(stub)
	}
	//함수명을 키로 맵의 값을 가져온다
	bcFunc := bcFunctions[function]
	if bcFunc == nil {
		return shim.Error("Invalid invoke function.")
	}
	return bcFunc(stub, args)
}

func main() {
	logger.SetLevel(shim.LogInfo)

	err := shim.Start(new(SmartContract))
	if err != nil {
		fmt.Printf("Error starting Simple chaincode: %s", err)
	}
}
