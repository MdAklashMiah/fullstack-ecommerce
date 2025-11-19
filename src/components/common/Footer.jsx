import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#e8e8e8] text-[#111] pt-10">
      <Container>
        {/* Top Icons Row */}
        <div className="border-b border-gray-300 pb-8">
          <div className=" flex justify-evenly text-center">
            <div className="flex items-center space-x-2.5">
              <img src="/images/footer/shipping.png" className="" alt="" />
              <div>
                <h4 className="font-semibold tracking-wide">
                  FAST AND FREE DELIVERY
                </h4>
                <p className="text-sm text-gray-600">
                  Free delivery for all orders over $140
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <img src="/images/footer/headphone.png" className="" alt="" />
              <div>
                <h4 className="font-semibold tracking-wide">
                  24/7 CUSTOMER SUPPORT
                </h4>
                <p className="text-sm text-gray-600">
                  Friendly 24/7 customer support
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <img src="/images/footer/shield.png" className="" alt="" />
              <div>
                <h4 className="font-semibold tracking-wide">
                  MONEY BACK GUARANTEE
                </h4>
                <p className="text-sm text-gray-600">
                  We return money within 30 days
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + Contact */}
          <div>
            <img src="/logo.png" alt="Uomo" className="h-6 mb-5" />
            <p className="text-sm leading-relaxed text-gray-700">
              1418 River Drive, Suite 35 Cottonhall, CA 9622 <br />
              United States
            </p>
            <p className="mt-4 text-sm text-gray-700">sale@uomo.com</p>
            <p className="text-sm text-gray-700">+1 246-345-0695</p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-5 text-gray-700">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>About Us</li>
              <li className="font-medium underline">Careers</li>
              <li>Affiliates</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">SHOP</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>New Arrivals</li>
              <li>Accessories</li>
              <li>Men</li>
              <li>Women</li>
              <li>Shop All</li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="font-semibold mb-4">SUBSCRIBE</h4>
            <p className="text-sm text-gray-700 mb-4">
              Be the first to get the latest news about trends, promotions, and
              much more!
            </p>

            <div className="flex border border-gray-300">
              <input
                type="text"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 text-sm outline-none"
              />
              <button className="px-6 bg-black text-white text-sm">JOIN</button>
            </div>

            <p className="text-sm mt-5 mb-2 font-medium">Secure payments</p>

            <div className="flex space-x-4 mt-2">
              <img src="/payments/discover.png" className="h-5" />
              <img src="/payments/mastercard.png" className="h-5" />
              <img src="/payments/paypal.png" className="h-5" />
              <img src="/payments/skrill.png" className="h-5" />
              <img src="/payments/visa.png" className="h-5" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 py-5 text-center text-sm text-gray-700">
          ©2020 Uomo
          <div className="mt-2 flex justify-center space-x-6 text-gray-700">
            <span>Language United Kingdom | English</span>
            <span>Currency $ USD</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
