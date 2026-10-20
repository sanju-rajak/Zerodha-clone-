
const axios = require("axios");

const sendSMS = async (mobile, message) => {
  try {
    const response = await axios.post(
      process.env.SMS_API_URL,
      {
        mobile_number: mobile,
      },
      {
        headers: {
          Authorization: `${process.env.SMS_API_AUTH} ${process.env.SMS_API_TOKEN}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    console.log("SMS API RESPONSE:", response.data);

    if (response.data.success !== true) {
      throw new Error(
        response.data.message || "SMS sending failed"
      );
    }

    return response.data;
  } catch (error) {
    console.error(
      "SMS Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

module.exports = sendSMS;