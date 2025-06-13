"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Form, message } from "antd";
import picdefault from "../public/defaultimage.webp";
import { Shadows_Into_Light } from "next/font/google";
import { useRecoilState } from "recoil";
import { profileAtom } from "@/atoms/profileAtom";
import { getProfile } from "@/lib/functions";
import { refetchCreditsAtom } from "@/atoms/flagAtom";
import { useUser } from "@auth0/nextjs-auth0/client";
import { generatePost } from "@/lib";
import fabulousLogo from '../public/stars.png'
import relaxingLogo from '../public/sunbathing.png'
import sonorousLogo from '../public/note.png'
import noisyLogo from '../public/noisy.png'
import futuramaLogo from "../public/icons8-futurama-friggere-50.png";
import naturalLogo from "../public/icons8-anime-100.png";
import duedLogo from "../public/icons8-ciglia-2d-48.png";
import tredLogo from "../public/icons8-sincronizzare-94.png";
import cyberneticLogo from "../public/icons8-cybernetic-64.png";
import landscapeLogo from "../public/icons8-paesaggio-40.png";
import floralLogo from "../public/icons8-floral-32.png";
import whiteblackLogo from "../public/icons8-bianco-e-nero-80.png";
import punkLogo from "../public/icons8-punk-64.png";
import bloodyLogo from "../public/icons8-bloody-85.png";
import techLogo from "../public/icons8-tech-50.png";
import tropicalLogo from "../public/icons8-spiaggia-50.png";
import portraitLogo from "../public/icons8-ritratto-40.png";
import paintingLogo from "../public/fsafs.png";
import mosaicLogo from "../public/icons8-arte-moderna-48.png";
import cartoonLogo from "../public/icons8-čeburaška-48.png";
import darkLogo from "../public/icons8-dark-85.png";
import musicalLogo from "../public/icons8-musicale-80.png";
import smileLogo from "../public/icons8-felice-48.png";
import oldLogo from "../public/icons8-persona-anziana-maschio-tipo-di-pelle-3-40.png";
import negativeLogo from "../public/icons8-pila-di-foto-50.png";
import metropolitanLogo from "../public/icons8-grattacieli-100.png";
import sunnyLogo from "../public/icons8-sun-star-100.png";
import animalistLogo from "../public/icons8-animali-selvatici-48.png";
import openImage from "../public/icons8-link-esterno-80.png";
import romanianFlag from "../public/flag.png";
import italianflag from "../public/italy.png";
import cloudyStyle from "../public/cloud.png";
import restingStyle from "../public/sleeping.png";
import sportStyle from "../public/sports.png";
import fruitStyle from "../public/fruits.png";
import smokyStyle from "../public/smoke.png";
import grassyStyle from "../public/ecological.png";
import woodyStyle from "../public/bark.png";
import lightStyle from "../public/light-bulb.png";
import celestialStyle from "../public/heaven.png";
import lunaticStyle from "../public/atro.png";
import lovelyStyle from "../public/heart-icon_34407.png";

import Script from "next/script";

const firstFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const secondFont = Shadows_Into_Light({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
export default function Home() {
  const [immagine, setImmagine] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const [postPrompt, setPostPrompt] = useState<PostPrompt>({
    command: "",
    style: "",
  });
  const [refetchCredits, setRefetchCredits] =
    useRecoilState(refetchCreditsAtom);
  const { user } = useUser();
  const [altezza, setAltezza] = useState(512);
  const [profile, setProfile] = useRecoilState(profileAtom);
  useEffect(() => {
    async function fetchProfile() {
      const profile = await getProfile();
      setProfile(profile);
      setRefetchCredits((prev) => !prev);
    }
    if (user) fetchProfile();
  }, [setProfile, user, setRefetchCredits]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    const res = await generatePost(postPrompt);
    console.log(res);
    await res
      .json()
      .then((data: any) => {
        setImmagine(data.data);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }
  function download() {
    const URL = immagine;
    if (typeof window !== "undefined") {
      window.location.href = URL;
    }
  }
  const selectFuturistic = () => {
    setPostPrompt({
      ...postPrompt,
      style: "futuristic",
    });
    message.success("Style selected");
  };
  const selectAnime = () => {
    setPostPrompt({
      ...postPrompt,
      style: "anime",
    });
    message.success("Style selected");
  };

   const selectNoisy = () => {
    setPostPrompt({
      ...postPrompt,
      style: "noisy",
    });
    message.success("Style selected");
  };
  const select3d = () => {
    setPostPrompt({
      ...postPrompt,
      style: "3d",
    });
    message.success("Style selected");
  };
  const select2d = () => {
    setPostPrompt({
      ...postPrompt,
      style: "2d",
    });
    message.success("Style selected");
  };
   const selectRelaxing = () => {
    setPostPrompt({
      ...postPrompt,
      style: "relaxing",
    });
    message.success("Style selected");
  };
  const selectCybernetic = () => {
    setPostPrompt({
      ...postPrompt,
      style: "cybernetic",
    });
    message.success("Style selected");
  };

  const selectLandscape = () => {
    setPostPrompt({
      ...postPrompt,
      style: "landscape",
    });
    message.success("Style selected");
  };

  const selectFabulous = () => {
    setPostPrompt({
      ...postPrompt,
      style: "fabulous",
    });
    message.success("Style selected");
  };

   const selectSonorous = () => {
    setPostPrompt({
      ...postPrompt,
      style: "sonorous",
    });
    message.success("Style selected");
  };
  const selectFloral = () => {
    setPostPrompt({
      ...postPrompt,
      style: "floral",
    });
    message.success("Style selected");
  };
  const selectPunk = () => {
    setPostPrompt({
      ...postPrompt,
      style: "punk",
    });
    message.success("Style selected");
  };
  const selectWhiteBlack = () => {
    setPostPrompt({
      ...postPrompt,
      style: "white&black",
    });
    message.success("Style selected");
  };
  const selectBloody = () => {
    setPostPrompt({
      ...postPrompt,
      style: "bloody",
    });
    message.success("Style selected");
  };
  const selectTech = () => {
    setPostPrompt({
      ...postPrompt,
      style: "tech",
    });
    message.success("Style selected");
  };
  const selectTropical = () => {
    setPostPrompt({
      ...postPrompt,
      style: "tropical",
    });
    message.success("Style selected");
  };
  const selectNatural = () => {
    setPostPrompt({
      ...postPrompt,
      style: "natural",
    });
    message.success("Style selected");
  };

  const selectPortrait = () => {
    setPostPrompt({
      ...postPrompt,
      style: "portrait",
    });
    message.success("Style selected");
  };

  const selectPainting = () => {
    setPostPrompt({
      ...postPrompt,
      style: "painting",
    });
    message.success("Style selected");
  };

  const selectMosaic = () => {
    setPostPrompt({
      ...postPrompt,
      style: "mosaic",
    });
    message.success("Style selected");
  };

  const selectCartoon = () => {
    setPostPrompt({
      ...postPrompt,
      style: "cartoon",
    });
    message.success("Style selected");
  };
  const selectMusical = () => {
    setPostPrompt({
      ...postPrompt,
      style: "musical",
    });
    message.success("Style selected");
  };
  const selectEvergreen = () => {
    setPostPrompt({
      ...postPrompt,
      style: "evergreen",
    });
    message.success("Style selected");
  };
  const selectSmile = () => {
    setPostPrompt({
      ...postPrompt,
      style: "smile",
    });
    message.success("Style selected");
  };
  const selectOld = () => {
    setPostPrompt({
      ...postPrompt,
      style: "old",
    });
    message.success("Style selected");
  };

  const selectNegative = () => {
    setPostPrompt({
      ...postPrompt,
      style: "negative",
    });
    message.success("Style selected");
  };
  const selectAnimalist = () => {
    setPostPrompt({
      ...postPrompt,
      style: "animalist",
    });
    message.success("Style selected");
  };
  const selectMetropolitan = () => {
    setPostPrompt({
      ...postPrompt,
      style: "metropolitan",
    });
    message.success("Style selected");
  };

  const selectSunny = () => {
    setPostPrompt({
      ...postPrompt,
      style: "sunny",
    });
    message.success("Style selected");
  };
  const selectDark = () => {
    setPostPrompt({
      ...postPrompt,
      style: "dark",
    });
    message.success("Style selected");
  };
  const selectSporty = () => {
    setPostPrompt({
      ...postPrompt,
      style: "sporty",
    });
    message.success("Style selected");
  };
  const selectResting = () => {
    setPostPrompt({
      ...postPrompt,
      style: "resting",
    });
    message.success("Style selected");
  };
  const selectCloudy = () => {
    setPostPrompt({
      ...postPrompt,
      style: "cloudy",
    });
    message.success("Style selected");
  };
  const selectItalian = () => {
    setPostPrompt({
      ...postPrompt,
      style: "italian",
    });
    message.success("Style selected");
  };
  const selectRomanian = () => {
    setPostPrompt({
      ...postPrompt,
      style: "romanian",
    });
    message.success("Style selected");
  };
  const selectFruitful = () => {
    setPostPrompt({
      ...postPrompt,
      style: "fruitful",
    });
    message.success("Style selected");
  };
  const selectSmoky = () => {
    setPostPrompt({
      ...postPrompt,
      style: "smoky",
    });
    message.success("Style selected");
  };
  const selectWoody = () => {
    setPostPrompt({
      ...postPrompt,
      style: "woody",
    });
    message.success("Style selected");
  };
  const selectGrassy = () => {
    setPostPrompt({
      ...postPrompt,
      style: "grassy",
    });
    message.success("Style selected");
  };
  const selectCelestial = () => {
    setPostPrompt({
      ...postPrompt,
      style: "celestial",
    });
    message.success("Style selected");
  };
  const selectLight = () => {
    setPostPrompt({
      ...postPrompt,
      style: "light",
    });
    message.success("Style selected");
  };
  const selectLovely = () => {
    setPostPrompt({
      ...postPrompt,
      style: "lovely",
    });
    message.success("Style selected");
  };
  const selectLunatic = () => {
    setPostPrompt({
      ...postPrompt,
      style: "lunatic",
    });
    message.success("Style selected");
  };

  return (
    <div className="pt-20 min-h-[200vh] bg-indigo-800 justify-center items-center text-center">
      <title>Image Drop AI - Home</title>
      <head>
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/peppeferd/creativeAI/master/app/favicon.ico"
        />
      </head>
      <div className="mx-2">
        <h1
          className={`bg-orange-400 text-3xl text-indigo-800 p-4 rounded-2xl w-fit mb-16 mx-auto text-center ${firstFont.className}`}
        >
          Create your own AI generated HD image
        </h1>
        <div className="flex flex-wrap gap-28 justify-center">
          <div>
            <Form
              name="ai-generator"
              onFinish={handleSubmit}
              scrollToFirstError
            >
              <div>
                <div>
                  <h1
                    className={`bg-white text-indigo-800 mb-2 w-fit mx-auto p-2 rounded-lg font-bold text-3xl ${secondFont.className}`}
                  >
                    Write your command
                  </h1>
                  <Form.Item name="command" label="">
                    <textarea
                      className="w-[40vh] md:w-[40vh] h-[20vh] resize-none rounded-lg text-xl tracking-widest font-extralight py-2 px-3 bg-white"
                      onChange={(e) =>
                        setPostPrompt({
                          ...postPrompt,
                          command: e.target.value,
                        })
                      }
                    />
                  </Form.Item>
                </div>
              </div>

              {profile.credits ? (
                <div>
                  <Button
                    className="w-fit"
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                  >
                    Submit command
                  </Button>
                </div>
              ) : (
                <div className="bg-orange-500 p-4 rounded-xl mt-3">
                  Buy some credits after the
                  <a
                    className="bg-indigo-800 text-white ml-2 p-2"
                    href="/profile"
                  >
                    Login/Signup
                  </a>
                </div>
              )}
            </Form>
          </div>
          <div className="bg-orange-100 text-green-600 h-full xl:w-[70vh] w-[40vh] rounded-xl">
            <h1
              className={`text-center text-2xl bg-indigo-500 py-3 text-white rounded-t-lg ${secondFont.className}`}
            >
              Choose style
            </h1>
            <div className="grid grid-cols-2">
              <div>
                <div>
                  <div className="flex flex-row justify-center items-center py-1">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectFuturistic}>Futuristic</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={futuramaLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectAnime}>Anime</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={naturalLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectFabulous}>Fabulous</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={fabulousLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectLunatic}>Lunatic</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={lunaticStyle}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={select2d}>2d</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={duedLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={select3d}>3d</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={tredLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectCybernetic}>Cybernetic</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={cyberneticLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectLandscape}>Landscape</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={landscapeLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                   <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectNoisy}>Noisy</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={noisyLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectFloral}>Floral</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={floralLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectWoody}>Woody</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={woodyStyle}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectPunk}>Punk</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={punkLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectWhiteBlack}>White&Black</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={whiteblackLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectBloody}>Bloody</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={bloodyLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectTech}>Tech </h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={techLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectTropical}>Tropical</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={tropicalLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectNatural}>Natural</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={naturalLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectItalian}>Italian</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={italianflag}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectRomanian}>Romanian</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={romanianFlag}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectSmoky}>Smoky</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={smokyStyle}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                   
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectLight}>Light</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={lightStyle}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="flex flex-row justify-center items-center py-1">
                    <div className="flex flex-row rounded-full hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectPortrait}>Portrait</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={portraitLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectPainting}>Painting</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={paintingLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectLovely}>Lovely</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={lovelyStyle}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectMosaic}>Mosaic</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={mosaicLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectCartoon}>Cartoon</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={cartoonLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectMusical}>Musical</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={musicalLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectSporty}>Sporty</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={sportStyle}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>

                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectDark}>Dark</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={darkLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectSonorous}>Sonorous</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={sonorousLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectSmile}>Smile</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={smileLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectGrassy}>Grassy</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={grassyStyle}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectOld}>Old</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={oldLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectNegative}>Negative</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={negativeLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectAnimalist}>Animalist</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={animalistLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectRelaxing}>Relaxing</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={relaxingLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectMetropolitan}>Metropolitan</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={metropolitanLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectSunny}>Sunny</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={sunnyLogo}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectCloudy}>Cloudy</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={cloudyStyle}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectResting}>Resting</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={restingStyle}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row rounded-full border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer">
                      <h3 onClick={selectFruitful}>Fruitful</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={fruitStyle}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row  border-black hover:border-green-300 hover:bg-yellow-700 hover:text-white cursor-pointer rounded-full">
                      <h3 onClick={selectCelestial}>Celestial</h3>
                      <Image
                        className="text-yellow-200 hover:text-orange-300"
                        src={celestialStyle}
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="loader justify-center items-center mx-auto mt-32"></div>
      ) : (
        <div className="justify-center mt-32 xl:mx-auto mx-4 pb-5">
          <Image
            className="generated mx-auto"
            width={altezza}
            height={altezza}
            alt="imm"
            src={immagine === "" ? picdefault : immagine}
          />
          {immagine && (
            <div className="w-fit mx-auto">
              <a href={immagine} download={immagine} target="_blank">
                <Image
                  className="rounded-lg mt-10 bg-white mx-auto"
                  src={openImage}
                  alt=""
                  width={50}
                  height={50}
                />
              </a>
            </div>
          )}
          <h1 className="my-5 text-3xl text-white">
            After generated, choose your own favorite image size:
          </h1>
          <div className="flex flex-wrap gap-6 justify-center">
            <button
              className="space-x-3 text-xl text-indigo-800 bg-orange-300 p-2 rounded-full"
              onClick={() => setAltezza(256)}
            >
              256x256
            </button>
            <button
              className="space-x-3 text-xl text-indigo-800 bg-orange-300 p-2 rounded-full"
              onClick={() => setAltezza(512)}
            >
              512x512
            </button>
            <button
              className="space-x-3 text-xl text-indigo-800 bg-orange-300 p-2 rounded-full"
              onClick={() => setAltezza(1024)}
            >
              1024x1024
            </button>
            <button
              className="space-x-3 text-xl text-indigo-800 bg-orange-300 p-2 rounded-full"
              onClick={() => setAltezza(1792)}
            >
              1792x1792
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
