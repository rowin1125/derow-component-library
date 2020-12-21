import {
  FaPhone,
  FaMailBulk,
  FaWhatsapp,
  FaRegCalendarAlt,
  FaBookOpen,
  FaCartPlus,
  FaIdBadge,
  FaPoll,
  FaRocket,
  FaServer,
  FaQuestion,
  FaPhotoVideo,
  FaCamera,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPinterestP,
} from 'react-icons/fa';
import { BsFillChatSquareDotsFill } from 'react-icons/bs';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { VscFileSubmodule } from 'react-icons/vsc';
import { CgData } from 'react-icons/cg';

export const iconGenerator = icon => {
  let newIcon;
  switch (icon) {
    case 'telefoon':
      newIcon = FaPhone;
      break;
    case 'mail':
      newIcon = FaMailBulk;
      break;
    case 'whatsapp':
      newIcon = FaWhatsapp;
      break;
    case 'agenda':
      newIcon = FaRegCalendarAlt;
      break;
    case 'chat':
      newIcon = BsFillChatSquareDotsFill;
      break;
    case 'boek':
      newIcon = FaBookOpen;
      break;
    case 'winkelmand':
      newIcon = FaCartPlus;
      break;
    case 'profiel':
      newIcon = FaIdBadge;
      break;
    case 'stats':
      newIcon = FaPoll;
      break;
    case 'raket':
      newIcon = FaRocket;
      break;
    case 'server':
      newIcon = FaServer;
      break;
    case 'foto/video':
      newIcon = FaPhotoVideo;
      break;
    case 'camera':
      newIcon = FaCamera;
      break;
    case 'data':
      newIcon = CgData;
      break;
    case 'file/search':
      newIcon = AiOutlineFileSearch;
      break;
    case 'files':
      newIcon = VscFileSubmodule;
      break;
    case 'facebook':
      newIcon = FaFacebookF;
      break;
    case 'instagram':
      newIcon = FaInstagram;
      break;
    case 'twitter':
      newIcon = FaTwitter;
      break;
    case 'linkedin':
      newIcon = FaLinkedinIn;
      break;
    case 'github':
      newIcon = FaGithub;
      break;
    case 'pinterest':
      newIcon = FaPinterestP;
      break;

    default:
      newIcon = FaQuestion;
      break;
  }
  return newIcon;
};
