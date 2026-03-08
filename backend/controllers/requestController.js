import Request from "../models/Request.js";

export const createRequest = async (req, res) => {
  try {
    const { fromUserId, toUserId } = req.body;

    const request = new Request({
      fromUser: fromUserId,
      toUser: toUserId,
    });

    await request.save();

    res.json(request);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getRequests = async (req, res) => {
  try {
    const requests = await Request.find().populate("fromUser toUser");
    res.json(requests);
  } catch (err) {
    res.status(500).json(err);
  }
};