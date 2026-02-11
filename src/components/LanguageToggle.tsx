import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<string>(() => {
    // Check localStorage for saved language preference, default to "en"
    return localStorage.getItem("preferredLang") || "en";
  });

  // Function to change language
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang); // Update the selected language state
    localStorage.setItem("preferredLang", lang); // Save language to localStorage
  };

  useEffect(() => {
    // Ensure the language is set when the component mounts
    i18n.changeLanguage(selectedLang);
  }, [i18n, selectedLang]);

  return (
    <>
      <div className="rounded-md shadow-sm" role="group">
        <Button
          variant={selectedLang === "jp" ? "secondary" : "outline"}
          className="rounded-r-none"
          size="sm"
          onClick={() => changeLanguage("jp")}
        >
          JP
        </Button>
        <Button
          variant={selectedLang === "en" ? "secondary" : "outline"}
          className="rounded-l-none"
          size="sm"
          onClick={() => changeLanguage("en")}
        >
          EN
        </Button>
      </div>
    </>
  );
}
