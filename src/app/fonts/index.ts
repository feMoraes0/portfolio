import { DM_Serif_Display, Poppins } from 'next/font/google'

const titleFont = DM_Serif_Display({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
});

const bodyFont = Poppins({
  weight: "300",
  style: "normal",
  subsets: ["latin"]
})

export { titleFont, bodyFont };
