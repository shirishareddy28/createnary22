import { useMemo } from "react";
import "./FAQs.css";

const FAQs = ({
  coibaseWallet,
  icon,
  fAQsBackgroundColor,
  fAQsWidth,
  fAQsPosition,
  fAQsTop,
  fAQsLeft,
  coibaseWalletFontWeight,
  coibaseWalletFontFamily,
  coibaseWalletColor,
  coibaseWalletFontSize,
}) => {
  const fAQsStyle = useMemo(() => {
    return {
      backgroundColor: fAQsBackgroundColor,
      width: fAQsWidth,
      position: fAQsPosition,
      top: fAQsTop,
      left: fAQsLeft,
    };
  }, [fAQsBackgroundColor, fAQsWidth, fAQsPosition, fAQsTop, fAQsLeft]);

  const coibaseWalletStyle = useMemo(() => {
    return {
      fontWeight: coibaseWalletFontWeight,
      fontFamily: coibaseWalletFontFamily,
      color: coibaseWalletColor,
      fontSize: coibaseWalletFontSize,
    };
  }, [
    coibaseWalletFontWeight,
    coibaseWalletFontFamily,
    coibaseWalletColor,
    coibaseWalletFontSize,
  ]);

  return (
    <div className="faqs" style={fAQsStyle}>
      <div className="coibase-wallet" style={coibaseWalletStyle}>
        {coibaseWallet}
      </div>
      <img className="icon" alt="" src={icon} />
    </div>
  );
};

export default FAQs;
