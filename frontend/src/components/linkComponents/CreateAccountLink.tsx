import { Link } from "react-router-dom"
import { Typography } from "../../utils/themes/typography"

export function CreateAccountLink() {
  return (
    <Link
    className="
    text-shadow-lg text-gray-800 hover:text-gray-900 active:text-black
    transition duration-150 active:scale-95 "
     to={"/register"}>
            <Typography variant="MediumLabel">
            CREATE ACCOUNT
            </Typography>
          </Link>
  )
}

