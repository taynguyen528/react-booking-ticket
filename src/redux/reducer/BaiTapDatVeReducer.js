import { DAT_GHE, HUY_GHE } from "../type/BaiTapDatVeType.js";

const initialState = {
    danhSachGheDangDat: [],
};

const BaiTapDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAT_GHE: {
            const { ghe } = action;
            const danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            const index = danhSachGheDangDatUpdate.findIndex(
                (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
            );
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {
                danhSachGheDangDatUpdate.push(ghe);
            }
            return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
        }
        case HUY_GHE: {
            const { soGhe } = action;
            const danhSachGheDangDatUpdate = state.danhSachGheDangDat.filter(
                (gheDangDat) => gheDangDat.soGhe !== soGhe
            );
            return { ...state, danhSachGheDangDat: danhSachGheDangDatUpdate };
        }
        default:
            return state;
    }
};

export default BaiTapDatVeReducer;
