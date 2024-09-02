import mongoose from 'mongoose'

export const usersImagesSchema = new mongoose.Schema(
  {
    subid: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    images: {
      type: Array,
      default: [],
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.models['usersimages'] ||
  mongoose.model('usersimages', usersImagesSchema)
