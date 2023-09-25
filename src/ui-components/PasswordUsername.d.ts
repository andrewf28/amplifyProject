/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, PasswordFieldProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PasswordUsernameOverridesProps = {
    PasswordUsername?: PrimitiveOverrideProps<FlexProps>;
    "Frame 437"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
} & EscapeHatchProps;
export declare type PasswordUsernameProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: PasswordUsernameOverridesProps | undefined | null;
}>;
export default function PasswordUsername(props: PasswordUsernameProps): React.ReactElement;
