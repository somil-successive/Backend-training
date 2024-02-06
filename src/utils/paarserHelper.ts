import IBulkUpload from "../modules/blogs/entity/IBulkUpload";

//eslint-disable-next-line
export const handleRemainingData = async (bulkUploadErrors: any,BulkErrorDetail: any,batchData: any,model: any,recordsProcessCount: any,errorCount: any,startTime: any,session_id: any,BulkUpload: any
) => {
  if (bulkUploadErrors.length > 0) {
    await BulkErrorDetail.bulkWrite(bulkUploadErrors, { ordered: false });
    bulkUploadErrors = [];
  }

  if (batchData.length > 0) {
    await model.bulkWrite(batchData, { ordered: false });
    batchData = [];
  }

  const endTime = Date.now();
  const bulkUploadRecord: IBulkUpload = {
    recordsProcessed: recordsProcessCount,
    totalErrors: errorCount,
    timeTaken: (endTime - startTime) / 1000,
    session_id: session_id,
  };

  await BulkUpload.bulkWrite([{ insertOne: { document: bulkUploadRecord } }], {
    ordered: false,
  });
};

//eslint-disable-next-line
export const transformRowData = (obj: any) => {
  const result = {};

  for (const key in obj) {
    const keys = key.split(".");
    // eslint-disable-next-line
    let currentObj: any = result;

    for (let i = 0; i < keys.length - 1; i++) {
      currentObj[keys[i]] = currentObj[keys[i]] || {};
      currentObj = currentObj[keys[i]];
    }

    currentObj[keys[keys.length - 1]] = obj[key];
  }

  return result;
};
