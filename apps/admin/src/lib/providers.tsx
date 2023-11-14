"use client"

import { Amplify } from "aws-amplify"
import awsExports from "../aws-exports"
import { PropsWithChildren } from "react";
// import { withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsExports, ssr: true })

export default function AmplifyProvider({ children }: PropsWithChildren) {
  return <>{children}</>
}

// function AmplifyProvider({ children }: PropsWithChildren) {
//   return <>{children}</>
// }

// export default withAuthenticator(AmplifyProvider)