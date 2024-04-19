import FAQs from "./FAQs";
import "./WalletFeatures.css";

const WalletFeatures = () => {
  return (
    <div className="wallet-features">
      <div className="wallet-info">
        <FAQs
          coibaseWallet="How do I receive payments for my sales"
          icon="/icon.svg"
          fAQsBackgroundColor="#e6e6e6"
          fAQsWidth="unset"
          fAQsPosition="relative"
          fAQsTop="unset"
          fAQsLeft="unset"
          coibaseWalletFontWeight="bold"
          coibaseWalletFontFamily="Urbanist"
          coibaseWalletColor="#11151d"
          coibaseWalletFontSize="14px"
        />
        <div className="parent">
          <FAQs
            coibaseWallet="Can I sell internationally on this marketplace?"
            icon="/icon.svg"
            fAQsBackgroundColor="#e6e6e6"
            fAQsWidth="unset"
            fAQsPosition="relative"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="bold"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="14px"
          />
          <FAQs
            coibaseWallet="What support and resource re available for sellers?"
            icon="/icon.svg"
            fAQsBackgroundColor="#e6e6e6"
            fAQsWidth="unset"
            fAQsPosition="relative"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="bold"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="14px"
          />
          <FAQs
            coibaseWallet="Is there a review process for upload products?"
            icon="/icon.svg"
            fAQsBackgroundColor="#e6e6e6"
            fAQsWidth="unset"
            fAQsPosition="relative"
            fAQsTop="unset"
            fAQsLeft="unset"
            coibaseWalletFontWeight="bold"
            coibaseWalletFontFamily="Urbanist"
            coibaseWalletColor="#11151d"
            coibaseWalletFontSize="14px"
          />
        </div>
      </div>
    </div>
  );
};

export default WalletFeatures;
