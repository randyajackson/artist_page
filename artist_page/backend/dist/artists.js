"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const uri = 'mongodb://localhost/artists';
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Connected to MongoDB");
    }
});
exports.ArtistSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    soundCloud: { type: String, required: false },
    youTube: { type: String, required: false },
    instagram: { type: String, required: false },
    paypal: { type: String, required: false },
    email: { type: String, required: false },
    description: { type: String, required: false },
    events: { type: String, required: false },
    tags: { type: String, required: false }
});
const Artists = mongoose.model('Artists', exports.ArtistSchema);
exports.default = Artists;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJ0aXN0cy5qcyIsInNvdXJjZVJvb3QiOiIvYXJ0aXN0UGFnZS9hcnRpc3RfcGFnZS9hcnRpc3RfcGFnZS9iYWNrZW5kL3NyYy8iLCJzb3VyY2VzIjpbImFydGlzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBcUM7QUFFckMsTUFBTSxHQUFHLEdBQVcsNkJBQTZCLENBQUM7QUFFbEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtJQUMvQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVVLFFBQUEsWUFBWSxHQUFHLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQztJQUM1QyxFQUFFLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7SUFDakMsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO0lBQ25DLEtBQUssRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztJQUNwQyxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7SUFDMUMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO0lBQ3ZDLFNBQVMsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztJQUN6QyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7SUFDdEMsS0FBSyxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO0lBQ3JDLFdBQVcsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztJQUMzQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7SUFDdEMsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO0NBQ3ZDLENBQUMsQ0FBQztBQUVILE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLG9CQUFZLENBQUMsQ0FBQztBQUN4RCxrQkFBZSxPQUFPLENBQUMifQ==