export const LAYOUT_LEFT_NAVIGATOR_TOGGLE = 'LAYOUT_LEFT_NAVIGATOR_TOGGLE';
export const LAYOUT_RIGHT_NAVIGATOR_TOGGLE = 'LAYOUT_RIGHT_NAVIGATOR_TOGGLE';

export const toogleLeftNavigator = () => {
    return { type: LAYOUT_LEFT_NAVIGATOR_TOGGLE };
}

export const toogleRightNavigator = () => {
    return { type: LAYOUT_RIGHT_NAVIGATOR_TOGGLE };
}
