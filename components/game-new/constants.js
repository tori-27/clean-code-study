import avatarSrc1 from "./ui/images/avatar-1.png";
import avatarSrc2 from "./ui/images/avatar-2.png";
import avatarSrc3 from "./ui/images/avatar-3.png";
import avatarSrc4 from "./ui/images/avatar-4.png";

export const GAME_SYMBOLS = {
  CROSS: "cross",
  ZERO: "zero",
  TRINGLE: "tringle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRINGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
  {
    id: "123e",
    name: "Dmytro",
    rating: 123,
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: "124e",
    name: "Laraffffffffadfsafsa",
    rating: 124,
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.ZERO,
  },
  {
    id: "123f",
    name: "Sasha",
    rating: 125,
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRINGLE,
  },
  {
    id: "343e",
    name: "Tima",
    rating: 126,
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];
