import React, { useState } from 'react'
import {FiSearch} from "react-icons/fi"
import './Listing.css'

const chapters = [  ["Al-Fatiha", 1, 7],
  ["Al-Baqara", 2, 286],
  ["Aal-e-Imran", 3, 200],
  ["An-Nisa", 4, 176],
  ["Al-Maeda", 5, 120],
  ["Al-Anaam", 6, 165],
  ["Al-Araf", 7, 206],
  ["Al-Anfal", 8, 75],
  ["At-Tawba", 9, 129],
  ["Yunus", 10, 109],
  ["Hud", 11, 123],
  ["Yusuf", 12, 111],
  ["Ar-Rad", 13, 43],
  ["Ibrahim", 14, 52],
  ["Al-Hijr", 15, 99],
  ["An-Nahl", 16, 128],
  ["Al-Isra", 17, 111],
  ["Al-Kahf", 18, 110],
  ["Maryam", 19, 98],
  ["Ta-Ha", 20, 135],
  ["Al-Anbiya", 21, 112],
  ["Al-Hajj", 22, 78],
  ["Al-Mumenoon", 23, 118],
  ["An-Noor", 24, 64],
  ["Al-Furqan", 25, 77],
  ["Ash-Shuara", 26, 227],
  ["An-Naml", 27, 93],
  ["Al-Qasas", 28, 88],
  ["Al-Ankaboot", 29, 69],
  ["Ar-Room", 30, 60],
  ["Luqman", 31, 34],
  ["As-Sajda", 32, 30],
  ["Al-Ahzab", 33, 73],
  ["Saba", 34, 54],
  ["Fatir", 35, 45],
  ["Ya-Seen", 36, 83],
  ["As-Saaffat", 37, 182],
  ["Sad", 38, 88],
  ["Az-Zumar", 39, 75],
  ["Ghafir", 40, 85],
  ["Fussilat", 41, 54],
  ["Ash-Shura", 42, 53],
  ["Az-Zukhruf", 43, 89],
  ["Ad-Dukhan", 44, 59],
  ["Al-Jathiya", 45, 37],
  ["Al-Ahqaf", 46, 35],
  ["Muhammad", 47, 38],
  ["Al-Fath", 48, 29],
  ["Al-Hujraat", 49, 18],
  ["Qaf", 50, 45],
  ["Adh-Dhariyat", 51, 60],
  ["At-Tur", 52, 49],
  ["An-Najm", 53, 62],
  ["Al-Qamar", 54, 55],
  ["Ar-Rahman", 55, 78],
  ["Al-Waqia", 56, 96],
  ["Al-Hadid", 57, 29],
  ["Al-Mujadila", 58, 22],
  ["Al-Hashr", 59, 24],
  ["al-mumtahanah", 60, 13],
  ["as-saff", 61, 14],
  ["al-jumu'ah", 62, 11],
  ["al-munafiqun", 63, 11],
  ["at-taghabun", 64, 18],
  ["at-talaq", 65, 12],
  ["at-tahrim", 66, 12],
  ["al-mulk", 67, 30],
  ["al-qalam", 68, 52],
  ["al-haqqah", 69, 52],
  ["al-ma'arij", 70, 44],
  ["nuh", 71, 28],
  ["al-jinn", 72, 28],
  ["al-muzzammil", 73, 20],
  ["al-muddaththir", 74, 56],
  ["al-qiyamah", 75, 40],
  ["al-insan", 76, 31],
  ["al-mursalat", 77, 50],
  ["an-naba", 78, 40],
  ["an-naziat", 79, 46],
  ["'abasa", 80, 42],
  ["at-takwir", 81, 29],
  ["al-infitar", 82, 19],
  ["al-mutaffifin", 83, 36],
  ["al-inshiqaq", 84, 25],
  ["al-buruj", 85, 22],
  ["at-tariq", 86, 17],
  ["al-a'la", 87, 19],
  ["al-ghashiyah", 88, 26],
  ["al-fajr", 89, 30],
  ["al-balad", 90, 20],
  ["ash-shams", 91, 15],
  ["al-lail", 92, 21],
  ["ad-duha", 93, 11],
  ["ash-sharh", 94, 8],
  ["at-tin", 95, 8],
  ["al-'alaq", 96, 19],
  ["al-qadr", 97, 5],
  ["al-bayyinah", 98, 8],
  ["az-zalzalah", 99, 8],
  ["al-'adiyat", 100, 11],
  ["al-qari'ah", 101, 11],
  ["at-takathur", 102, 8],
  ["al-'asr", 103, 3],
  ["al-humazah", 104, 9],
  ["al-fil", 105, 5],
  ["quraysh", 106, 4],
  ["al-ma'un", 107, 7],
  ["al-kawthar", 108, 3],
  ["al-kafirun", 109, 6],
  ["an-nasr", 110, 3],
  ["al-masad", 111, 5],
  ["al-ikhlas", 112, 4],
  ["al-falaq", 113, 5],
  ["an-nas", 114, 6]
]

function Listing() {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredChapters = chapters.filter((chapter) => {
    return chapter[0].toLowerCase().includes(searchText.toLowerCase());
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
          <h2 style={{textAlign: 'center'}}>Read Holy Quran With Translation And Tafsir Of Every Ayat</h2>
          
          <div className="search__box">
            <input 
                  type="search" 
                  placeholder='search "al-fatihah"'
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}/>
            <div className="search-icon">
              <FiSearch />
            </div>
          </div>

          <div className="chapters">
            {visibleChapters.map((chapter) => (
              <>
                
                <div key={chapter[0]} className='chapter'>
                  <div className='index'>{chapter[1]}</div>
                  <div>{chapter[0]} <br/> verses: {chapter[2]}</div>  
                </div>
              </>
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