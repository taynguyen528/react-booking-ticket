import React from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/BaiTapDatVeActions.js";

const HangGhe = (props) => {
    const { hangGhe, soHangGhe, danhSachGheDangDat, datGhe } = props;
    const renderGhe = () => {
        return hangGhe.danhSachGhe.map((ghe, index) => {
            var cssGheDaDat = "";
            var disabled = false;
            if (ghe.daDat) {
                cssGheDaDat = "gheDuocChon";
                disabled = true;
            }
            var cssGheDangDat = "";
            const indexGheDangDat = danhSachGheDangDat.findIndex(
                (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
            );
            if (indexGheDangDat !== -1) {
                cssGheDangDat = "gheDangChon";
            }

            return (
                <button
                    onClick={() => {
                        datGhe(ghe);
                    }}
                    disabled={disabled}
                    className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
                    key={index}
                >
                    {ghe.soGhe}
                </button>
            );
        });
    };

    const renderSoHang = () => {
        return hangGhe.danhSachGhe.map((hang, index) => {
            return (
                <button className="rowNumber" key={index}>
                    {hang.soGhe}
                </button>
            );
        });
    };

    const renderHangGhe = () => {
        if (soHangGhe === 0) {
            return (
                <div className="ml-4">
                    {hangGhe.hang} {renderSoHang()}
                </div>
            );
        } else {
            return (
                <div>
                    {hangGhe.hang} {renderGhe()}
                </div>
            );
        }
    };

    return (
        <div className="text-light text-left ml-5 mt-1">{renderHangGhe()}</div>
    );
};

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            dispatch(datGheAction(ghe));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
