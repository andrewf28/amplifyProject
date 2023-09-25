/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FirstLastAviOverridesProps = {
    FirstLastAvi?: PrimitiveOverrideProps<ViewProps>;
    TextField38554483?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38554490?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Upload Profile Picture"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FirstLastAviProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FirstLastAviOverridesProps | undefined | null;
}>;
export default function FirstLastAvi(props: FirstLastAviProps): React.ReactElement;
