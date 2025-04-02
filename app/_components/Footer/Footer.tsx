interface FooterProps {}

function Footer({}: FooterProps) {
  return (
    <footer className="flex items-center justify-center bg-black text-white py-4">
      <p className="text-sm">© 2023 M Store. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
