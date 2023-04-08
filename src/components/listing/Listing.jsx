import React, { useState } from 'react'
import {FiSearch} from "react-icons/fi"
import './Listing.css'

const chapters = [
  "Al-Fatihah",
  "Al-Baqarah",
  "Al-'Imran",
  "An-Nisa'",
  "Al-Ma'idah",
  "Al-An'am",
  "Al-A'raf",
  "Al-Anfal",
  "At-Tawbah",
  "Yunus",
  "Hud",
  "Yusuf",
  "Ar-Ra'd",
  "Ibrahim",
  "Al-Hijr",
  "An-Nahl",
  "Al-Isra'",
  "Al-Kahf",
  "Maryam",
  "Taha",
  "Al-Anbiya'",
  "Al-Hajj",
  "Al-Mu'minun",
  "An-Nur",
  "Al-Furqan",
  "Ash-Shu'ara'",
  "An-Naml",
  "Al-Qasas",
  "Al-'Ankabut",
  "Ar-Rum",
  "Luqman",
  "As-Sajdah",
  "Al-Ahzab",
  "Saba'",
  "Fatir",
  "Ya-Sin",
  "As-Saffat",
  "Sad",
  "Az-Zumar",
  "Ghafir",
  "Fussilat",
  "Ash-Shura",
  "Az-Zukhruf",
  "Ad-Dukhan",
  "Al-Jathiya",
  "Al-Ahqaf",
  "Muhammad",
  "Al-Fath",
  "Al-Hujurat",
  "Qaf",
  "Adh-Dhariyat",
  "At-Tur",
  "An-Najm",
  "Al-Qamar",
  "Ar-Rahman",
  "Al-Waqi'ah",
  "Al-Hadid",
  "Al-Mujadilah",
  "Al-Hashr",
  "Al-Mumtahanah",
  "As-Saff",
  "Al-Jumu'ah",
  "Al-Munafiqun",
  "At-Taghabun",
  "At-Talaq",
  "At-Tahrim",
  "Al-Mulk",
  "Al-Qalam",
  "Al-Haqqah",
  "Al-Ma'arij",
  "Nuh",
  "Al-Jinn",
  "Al-Muzzammil",
  "Al-Muddaththir",
  "Al-Qiyamah",
  "Al-Insan",
  "Al-Mursalat",
  "An-Naba'",
  "An-Nazi'at",
  "'Abasa",
  "At-Takwir",
  "Al-Infitar",
  "Al-Mutaffifin",
  "Al-Inshiqaq",
  "Al-Buruj",
  "At-Tariq",
  "Al-A'la",
  "Al-Ghashiyah",
  "Al-Fajr",
  "Al-Balad",
  "Ash-Shams",
  "Al-Layl",
  "Ad-Duha",
  "Ash-Sharh",
  "At-Tin",
  "Al-'Alaq",
  "Al-Qadr",
  "Al-Bayyinah",
  "Az-Zalzalah",
  "Al-'Adiyat",
  "Al-Qari'ah",
  "At-Takathur",
  "Al-'Asr",
  "Al-Humazah",
  "Al-Fil",
  "Quraish",
  "Al-Ma'un",
  "Al-Kauthar",
  "Al-Kafirun",
  "Al-Nasr",
  "Al-Lahab",
  "Al-Ikhlas",
  "Al-Falaq",
  "Al-Nas"
]

function Listing() {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredChapters = chapters.filter((chapter) => {
    return chapter.toLowerCase().includes(searchText.toLowerCase());
  });

  const totalPages = Math.ceil(chapters.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleChapters = filteredChapters.slice(startIndex, endIndex);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  }

  return (
    <section id="listing">
        <div className="container listing__container">
          <h2 style={{textAlign: 'center'}}>Ready Holy Quran With Translation And Tafsir Of Every Ayat</h2>
          
          <div className="search__box">
            <input 
                  type="text" 
                  placeholder='search "al-fatihah"'
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}/>
            <FiSearch />
          </div>

          <div className="chapters">
            {visibleChapters.map((chapter) => (
              <div key={chapter}>{chapter}</div>
            ))}
          </div>
          
          <div className="list">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <a key={page} className={page === currentPage ? "active" : ""} onClick={() => handlePageClick(page)}>{page}</a>
            ))}
          </div>
        </div>
    </section>
  )
}

export default Listing