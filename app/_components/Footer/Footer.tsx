interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <div className="flex items-center justify-center bg-black text-white py-4">
      <p className="text-sm">© 2023 M Store. All rights reserved.</p>
    </div>
  );
}

export default Footer;
