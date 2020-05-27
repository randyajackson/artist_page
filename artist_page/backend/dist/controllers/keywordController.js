"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = require("./../keywords");

//Get - /keywords returns all keywords
exports.allKeywords = (req, res) => {
    let keyword_list = keywords_1.default.find((err, keyword_list) => {
        if (err) {
            
            res.send(err);
        }
        else {
            console.log(keyword_list);
            res.send(keyword_list);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZW50Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIvYXJ0aXN0UGFnZS9hcnRpc3RfcGFnZS9hcnRpc3RfcGFnZS9iYWNrZW5kL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3JlY2VudENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwQ0FBdUM7QUFFdkMsd0NBQXdDO0FBQzdCLFFBQUEsVUFBVSxHQUFHLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFO0lBRXBELElBQUksWUFBWSxHQUFHLGlCQUFXLENBQUMsSUFBSSxDQUFFLENBQUMsR0FBUSxFQUFFLFlBQWlCLEVBQUUsRUFBRTtRQUNqRSxFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ0wsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNCLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyJ9