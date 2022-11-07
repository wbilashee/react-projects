import OurStaff from "../../components/OurStaff/OurStaff";
import Tours from "../../components/Tours/Tours";
import Reviews from "../../components/Reviews/Reviews";
import Questions from "../../components/Questions/Questions";
import Menu from "../../components/Menu/Menu";
import Tabs from "../../components/Tabs/Tabs";
import Slider from "../../components/Slider/Slider";
import LoremIpsum from "../../components/LoremIpsum/LoremIpsum";
import ColorGen from "../../components/ColorGen/ColorGen";
import GroceryBud from "../../components/GroceryBud/GroceryBud";
import Navbar from "../../components/Navbar/Navbar";
import SideModal from "../../components/SideModal/SideModal";
import Submenus from "../../components/Submenus/Submenus";
import Cart from "../../components/Cart/Cart";
import Cocktails from "../../components/Cocktails/Cocktails";
import MarkdownPreview from "../../components/MarkdownPreview/MarkdownPreview";
import RandomPerson from "../../components/RandomPerson/RandomPerson";
import Pagination from "../../components/Pagination/Pagination";
import StockPhotos from "../../components/StockPhotos/StockPhotos";
import DarkMode from "../../components/DarkMode/DarkMode";
import Movies from "../../components/Movies/Movies";
import HackerNews from "../../components/HackerNews/HackerNews";
import Quiz from "../../components/Quiz/Quiz";
import RandomQuote from "../../components/RandomQuote/RandomQuote";
import DrumMachine from "../../components/DrumMachine/DrumMachine";
import Calculator from "../../components/Calculator/Calculator";
import Pomodoro from "../../components/Pomodoro/Pomodoro";

const projects = [
    {
        id: 1,
        title: "Our Staff",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913523/ourstaff_wclhmm.png",
        component: OurStaff,
    }, {
        id: 2,
        title: "Tours",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913524/tours_hzhn4w.png",
        component: Tours,
    }, {
        id: 3,
        title: "Reviews",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913522/reviews_icyhzf.png",
        component: Reviews,
    }, {
        id: 4,
        title: "Questions",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913522/questions_z8vehv.png",
        component: Questions,
    }, {
        id: 5,
        title: "Menu",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913523/menu_tmjcho.png",
        component: Menu,
    }, {
        id: 6,
        title: "Tabs",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913524/tabs_oauz0y.png",
        component: Tabs,
    }, {
        id: 7,
        title: "Slider",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913523/slider_cghgd4.png",
        component: Slider,
    }, {
        id: 8,
        title: "Lorem Ipsum Generator",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913525/lorem_qaeyr9.png",
        component: LoremIpsum,
    }, {
        id: 9,
        title: "Color Shades Generator",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913523/color-gen_lw00ke.png",
        component: ColorGen,
    }, {
        id: 10,
        title: "Grocery Bud",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913522/grocery_zzrqvr.png",
        component: GroceryBud,
    }, {
        id: 11,
        title: "Navbar",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913522/navbar_qhsmhm.png",
        component: Navbar,
    }, {
        id: 12,
        title: "Modal And Sidebar",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913524/sidemodal_vqlxqn.png",
        component: SideModal,
    }, {
        id: 13,
        title: "Submenus",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913525/submenus_qtrcrt.png",
        component: Submenus,
    }, {
        id: 14,
        title: "Cart",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913523/cart_tnacqp.png",
        component: Cart,
    }, {
        id: 15,
        title: "Cocktails",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913525/cocktails_h3atog.png",
        component: Cocktails,
    }, {
        id: 16,
        title: "Markdown Previewer",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913525/markdown_ayl9uc.png",
        component: MarkdownPreview,
    }, {
        id: 17,
        title: "Random Person",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913525/person_bmhpbr.png",
        component: RandomPerson,
    }, {
        id: 18,
        title: "Pagination",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913523/pagination_h73tio.png",
        component: Pagination,
    }, {
        id: 19,
        title: "Stock Photos",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913524/photos_nmxnzu.png",
        component: StockPhotos,
    }, {
        id: 20,
        title: "Dark Mode",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913524/mode_cpuvty.png",
        component: DarkMode,
    }, {
        id: 21,
        title: "Movies",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913525/movies_m8iqzw.png",
        component: Movies,
    }, {
        id: 22,
        title: "Hacker News",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913524/hacker-news_lm9k7j.png",
        component: HackerNews,
    }, {
        id: 23,
        title: "Quiz",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913525/quiz_l8u1gi.png",
        component: Quiz,
    }, {
        id: 24,
        title: "Random Quote Machine",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913525/quote_gdwfie.png",
        component: RandomQuote,
    }, {
        id: 25,
        title: "Drum Machine",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913526/drum-machine_tqulmo.png",
        component: DrumMachine,
    }, {
        id: 26,
        title: "Calculator",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913522/calculator_nvkev2.png",
        component: Calculator,
    }, {
        id: 27,
        title: "Pomodoro Clock",
        image: "https://res.cloudinary.com/dhhvnduts/image/upload/v1667913522/pomodoro_zusnjr.png",
        component: Pomodoro,
    },
]

export default projects;
