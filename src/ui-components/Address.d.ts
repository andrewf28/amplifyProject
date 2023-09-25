/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, SelectFieldProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddressOverridesProps = {
    Address?: PrimitiveOverrideProps<ViewProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    TextField38554450?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 44038554457"?: PrimitiveOverrideProps<FlexProps>;
    TextField38554458?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 44038554465"?: PrimitiveOverrideProps<FlexProps>;
    TextField38554466?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type AddressProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AddressOverridesProps | undefined | null;
}>;
export default function Address(props: AddressProps): React.ReactElement;
