import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiChevronLeft, HiHome, HiArchive } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
    ButtonHeader,
    HeaderWrap,
    TitleHeader,
    TitleWrap,
    HeaderItem,
    HeaderMenu,
} from "./HeaderStyle";

const Header = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [showBack, setShowBack] = useState(false);

    useEffect(() => {
        setShowBack(false);
        if (location.pathname.includes("/anime/detail/")) {
            setShowBack(true);
        }
        if (location.pathname.includes("/collection/detail/")) {
            setShowBack(true);
        }
    }, [location]);

    return (
        <HeaderWrap>
            {showBack ? (
                <ButtonHeader onClick={() => navigate(-1)}>
                    <HiChevronLeft size={28} />
                </ButtonHeader>
            ) : null}
            <TitleWrap>
                <TitleHeader>Anime Collection List</TitleHeader>
            </TitleWrap>
            <HeaderMenu>
                <Link to="/">
                    <HeaderItem>
                        <HiHome size={24} />
                        Home
                    </HeaderItem>
                </Link>
                <Link to="/collections">
                    <HeaderItem>
                        <HiArchive size={24} />
                        Collect
                    </HeaderItem>
                </Link>
            </HeaderMenu>
        </HeaderWrap>
    );
};

export default Header;
