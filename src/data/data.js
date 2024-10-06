import { SiReact } from "react-icons/si";
import { BsServer } from "react-icons/bs";
import { SiAmazonaws } from "react-icons/si";
import { SiAndroidstudio} from "react-icons/si";
import { TbAugmentedReality } from "react-icons/tb";
import { SiPwa } from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <SiReact />,
    title: "Frontend Development",
    des: "Experienced with HTML, CSS, Bootstrap, React.js, Next.js, Material UI and Redux Toolkit.",
  },
  {
    id: 2,
    icon: <BsServer />,
    title: "Backend Development",
    // des: "Experienced with Node.js, Express.js, MongoDB, MySQL, REST API, and JWT.",
    des: "Experienced with Python, Django, REST API, and JWT.",
  },
  {
    id: 3,
    icon: <SiAmazonaws />,
    title: "AWS",
    des: "Experienced with AWS deployment with proficiency in services such as AWS Lambda, API Gateway, Amplify, S3 Bucket, ECS, ECR, EC2.",
  },
  {
    id: 4,
    icon: <SiPwa />,
    title: "Mobile App Development",
    des: "Experienced with Android SDK, PWA, React Native",
  },
  // {
  //   id: 5,
  //   icon: <TbAugmentedReality />,
  //   title: "AR Development",
  //   des: "Experienced with AR Android application development using ARCore SDK, Unity, C#, and FreeCAD.",
  // },
];
