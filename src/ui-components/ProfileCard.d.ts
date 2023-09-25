/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Creator } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, ImageProps, RatingProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileCardOverridesProps = {
    ProfileCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    "Frame 445"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    Followers3861913?: PrimitiveOverrideProps<FlexProps>;
    MyIcon3861914?: MyIconProps;
    "99 Followers3861915"?: PrimitiveOverrideProps<TextProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    Badge38611859?: PrimitiveOverrideProps<BadgeProps>;
    Badge38611705?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 444"?: PrimitiveOverrideProps<FlexProps>;
    Badge38612227?: PrimitiveOverrideProps<BadgeProps>;
    Badge38612358?: PrimitiveOverrideProps<BadgeProps>;
    Badge38612405?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 441"?: PrimitiveOverrideProps<FlexProps>;
    Followers29766904?: PrimitiveOverrideProps<FlexProps>;
    MyIcon29766905?: MyIconProps;
    "99 Followers29766906"?: PrimitiveOverrideProps<TextProps>;
    Followers3860763?: PrimitiveOverrideProps<FlexProps>;
    MyIcon3860764?: MyIconProps;
    "99 Followers3860765"?: PrimitiveOverrideProps<TextProps>;
    Followers3860783?: PrimitiveOverrideProps<FlexProps>;
    MyIcon3860784?: MyIconProps;
    "99 Followers3860785"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProfileCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    creatorCard?: Creator;
} & {
    overrides?: ProfileCardOverridesProps | undefined | null;
}>;
export default function ProfileCard(props: ProfileCardProps): React.ReactElement;
