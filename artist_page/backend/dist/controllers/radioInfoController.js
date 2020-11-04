"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRadioInfo = void 0;
const radio_infos_1 = require("./../radio_infos");
//Get - /radio_infos returns all recent songs
exports.allRadioInfo = (req, res) => {
    let radio_infos = radio_infos_1.default.find((err, radio_infos) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(radio_infos);
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW9JbmZvQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3JhZGlvSW5mb0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0Esa0RBQTJDO0FBRTNDLDZDQUE2QztBQUNsQyxRQUFBLFlBQVksR0FBRyxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsRUFBRTtJQUV0RCxJQUFJLFdBQVcsR0FBRyxxQkFBVyxDQUFDLElBQUksQ0FBRSxDQUFDLEdBQVEsRUFBRSxXQUFnQixFQUFFLEVBQUU7UUFDL0QsSUFBRyxHQUFHLEVBQUU7WUFDSixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO2FBQU07WUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMifQ==