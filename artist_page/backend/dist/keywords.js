"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeywordSchema = void 0;
const mongoose = require("mongoose");
require('dotenv').config();
//@ts-ignore
const uri = process.env.MONGOOSE_URL_KEYWORDS;
//@ts-ignore
let x = mongoose.createConnection(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected to MongoDB");
    }
});
exports.KeywordSchema = new mongoose.Schema({
    id: { type: Number, required: false },
    keyword: { type: String, required: false },
    count: { type: Number, required: false }
});
const Keywords = x.model('Youtube_keywords', exports.KeywordSchema);
exports.default = Keywords;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5d29yZHMuanMiLCJzb3VyY2VSb290IjoiLi9zcmMvIiwic291cmNlcyI6WyJrZXl3b3Jkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRTNCLFlBQVk7QUFDWixNQUFNLEdBQUcsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDO0FBRXRELFlBQVk7QUFDWixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBUSxFQUFFLEVBQUU7SUFDaEQsSUFBSSxHQUFHLEVBQUU7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUMzQjtTQUFNO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQ3ZDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFVSxRQUFBLGFBQWEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDN0MsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFO0lBQ3JDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRTtJQUMxQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUU7Q0FDM0MsQ0FBQyxDQUFDO0FBRUgsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxxQkFBYSxDQUFDLENBQUM7QUFDNUQsa0JBQWUsUUFBUSxDQUFDIn0=