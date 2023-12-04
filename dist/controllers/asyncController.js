var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class AsyncController {
    constructor() {
        this.asyncData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let myPromise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                    reject("Time Exceeds");
                }, 3000);
            });
            try {
                const response = yield myPromise;
                console.log(response);
            }
            catch (err) {
                res.status(400).json({ error: err });
            }
        });
    }
}
export default new AsyncController().asyncData;
