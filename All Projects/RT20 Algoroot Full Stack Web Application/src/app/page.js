"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./contexts/authContext";
import styles from "./page.module.css";

export default function DetailsPage() {
  const { userLoggedIn } = useAuth();
  const router = useRouter();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);  // New state to track auth check
  const rowsPerPage = 5;

  useEffect(() => {
    if (userLoggedIn === null) return;  // Wait until auth state is known

    if (!userLoggedIn) {
      router.push("/SignIn");
    } else {
      setCheckingAuth(false);  // Auth confirmed, allow rendering
    }
  }, [userLoggedIn, router]);

  useEffect(() => {
    if (checkingAuth) return;  // Don't fetch data if auth check is in progress

    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        const formattedData = users.map((user) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          username: user.username,
        }));
        setData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [checkingAuth]);

  if (checkingAuth) return null;  // Prevent rendering until auth check is complete

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toString().includes(searchTerm.toLowerCase()) || 
    item.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className={styles.container}>
      <button className={styles.hamburger} onClick={() => setSidebarOpen(!sidebarOpen)}>
        &#9776;
      </button>

      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
        <h2 className={styles.sidebarTitle}>Navigation</h2>
        <ul>
          <li><a href="https://algorootglobal.com/about" target="_blank">About</a></li>
          <hr/>
          <li><a href="https://algorootglobal.com/development-services" target="_blank">Services</a></li>
          <hr/>
          <li><a href="https://algorootglobal.com/products" target="_blank">Products</a></li>
          <hr/>
          <li><a href="https://algorootglobal.com/partner" target="_blank">Partner</a></li>
          <hr/>
          <li><a href="https://algorootglobal.com/career" target="_blank">Career</a></li>
          <hr/>
          <li><a href="https://algorootglobal.com/contact-us" target="_blank">Contact</a></li>
          <hr/>
          <li><a href="https://www.rishik.tech/" target="_blank">Portfolio</a></li>
        </ul>
      </aside>

      <main className={styles.mainContent}>
        <h1 className={styles.sectionTitle}>Details Page</h1>

        <input
          type="text"
          placeholder="Search by id, name, email, username..."
          className={styles.searchBar}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {displayedData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td className={styles.ellipsisCell}>{item.name}</td>
                  <td className={styles.ellipsisCell}>{item.email}</td>
                  <td className={styles.ellipsisCell}>{item.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Next</button>
        </div>
      </main>
    </div>
  );
}
