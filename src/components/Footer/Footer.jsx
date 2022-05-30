import { FooterWrap, FooterItemWrap, FooterItem } from "./FooterStyle";
import { HiHome, HiArchive } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
    return (
        <FooterWrap>
            <FooterItemWrap left>
                <Link to="/">
                    <FooterItem>
                        <HiHome size={24} />
                        Home
                    </FooterItem>
                </Link>
            </FooterItemWrap>
            <FooterItemWrap right>
                <Link to="/collections">
                    <FooterItem>
                        <HiArchive size={24} />
                        Collect
                    </FooterItem>
                </Link>
            </FooterItemWrap>
        </FooterWrap>
    );
}

export default Header;
