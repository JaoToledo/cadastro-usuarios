import { Link } from "react-router-dom";
import { Typography } from "../../utils/themes/typography";

export function ForgotPasswordLink(){
  return (
    <Link className="
    text-shadow-lg text-gray-800 hover:text-gray-900 active:text-black
    transition duration-150 active:scale-95 "
     to={"/login"}>
            <Typography variant="MediumLabel">
            FORGOT PASSWORD?
            </Typography>
          </Link>
  )
}