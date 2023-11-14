"use client"

import { Amplify } from "aws-amplify"
import awsExports from "../aws-exports"
import '@aws-amplify/ui-react/styles.css';
import { PropsWithChildren } from "react";

Amplify.configure({ ...awsExports, ssr: true })

export default function AmplifyProvider({ children }: PropsWithChildren) {
  return <>{children}</>
}