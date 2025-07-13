import { Typography } from "../../../../utils/themes/Typography";

const passwordRules = [
  {
    test: (val: string) => val.length >= 8,
    message: "At least 8 characters",
  },
  {
    test: (val: string) => /[A-Z]/.test(val),
    message: "At least one uppercase character",
  },

  {
    test: (val: string) => /[0-9]/.test(val),
    message: "At least one number",
  },
  {
    test: (val: string) => /[^A-Za-z0-9]/.test(val),
    message: "At least one special character",
  },
];

interface PasswordRequirementsBoxProps {
  password: string;
}

export function PasswordRequirementsBox({ password }: PasswordRequirementsBoxProps) {
  return (
    <div className="mt-2 ml-4 p-4 border border-gray-300 rounded-lg bg-white min-w-[220px] shadow">
      <Typography className="block mb-2 text-gray-700 font-semibold">Password Requirements</Typography>
      <ul className="space-y-1.5">
        {passwordRules.map((rule, idx) => (
          <li
            key={idx}
            className={`flex items-center gap-2 ${
              rule.test(password) ? "text-green-600 font-semibold" : "text-red-500"
            }`}
          >
            {rule.test(password) ? (
              <span className="text-green-600">✅</span>
            ) : (
              <span className="text-red-500">❌</span>
            )}
            {rule.message}
          </li>
        ))}
      </ul>
    </div>
  );
}