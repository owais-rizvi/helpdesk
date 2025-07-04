import ReCAPTCHA from 'react-google-recaptcha';

const ReCaptchaComponent = () => {
  const SITE_KEY = import.meta.env.VITE_SITE_KEY; // Replace with your actual site key from Google

  return (
    <div className="mt-4">
      <ReCAPTCHA
        sitekey={SITE_KEY}
        // onChange={onChange}
      />
    </div>
  );
};

export default ReCaptchaComponent;
