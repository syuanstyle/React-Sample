const RET_CD_SUCCESS = 0;
const RET_CD_FAIL = -1;

export async function getSpaceListData() {

    try {
        const response = await fetch('http://localhost:3000/api/listRet');
        return await response.json();
    } catch (error) {
        return [];
    }

}

export function retDataTrans(dataInput) {
    let dataObj;

    if (dataInput == null) {
        console.log("dataInput is null");
        return [];
    }

    if (RET_CD_SUCCESS == dataInput.retCd) {
        dataObj = dataInput.retObject;
    } else if (RET_CD_FAIL == dataInput.retCd) {
        console.log("data failed");
    }

    return dataObj;
}
