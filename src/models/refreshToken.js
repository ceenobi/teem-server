import { Schema, model } from "mongoose";

const refreshTokenSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    expireAt: {
      type: Date,
      default: Date.now,
      expires: 86400,
    },
  },
  {
    timestamps: true,
  }
);

const RefreshToken = model("RefreshToken", refreshTokenSchema);

export default RefreshToken;