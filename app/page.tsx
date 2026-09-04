import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CBSE Mandatory Disclosure | Insight Academy",
  description:
    "View and download the mandatory disclosure documents for Insight Academy.",
};

type Document = {
  title: string;
  file: string;
  size: string;
};

type DocumentGroup = {
  id: string;
  eyebrow: string;
  title: string;
  documents: Document[];
};

const documentGroups: DocumentGroup[] = [
  {
    id: "affiliation",
    eyebrow: "A",
    title: "Affiliation & registration",
    documents: [
      {
        title: "School Affiliation Certificate",
        file: "school-affiliation.pdf",
        size: "312 KB",
      },
      {
        title: "No Objection Certificate",
        file: "no-objection-certificate.pdf",
        size: "479 KB",
      },
      {
        title: "Recognition Certificate",
        file: "recognition-certificate.pdf",
        size: "7.0 MB",
      },
      {
        title: "DEO Certificate",
        file: "deo-certificate.pdf",
        size: "540 KB",
      },
      {
        title: "Revised Registration Certificate",
        file: "revised-registration-certificate.pdf",
        size: "462 KB",
      },
      {
        title: "IET Trust Deed",
        file: "iet-trust-deed.pdf",
        size: "4.9 MB",
      },
    ],
  },
  {
    id: "safety",
    eyebrow: "B",
    title: "Safety & sanitation",
    documents: [
      {
        title: "Building Safety Certificate",
        file: "building-safety-certificate.pdf",
        size: "433 KB",
      },
      {
        title: "Fire Safety Certificate",
        file: "fire-safety-certificate.pdf",
        size: "128 KB",
      },
      {
        title: "Water & Sanitary Certificate",
        file: "water-sanitary-certificate.pdf",
        size: "116 KB",
      },
    ],
  },
  {
    id: "academics",
    eyebrow: "C",
    title: "Academics & governance",
    documents: [
      {
        title: "School Management Committee",
        file: "school-management-committee.pdf",
        size: "314 KB",
      },
      {
        title: "Parent–Teacher Association Member List",
        file: "pta-member-list.pdf",
        size: "423 KB",
      },
      {
        title: "Fee Structure",
        file: "fee-structure.pdf",
        size: "215 KB",
      },
      {
        title: "Academic Calendar 2026–27",
        file: "academic-calendar-2026-27.pdf",
        size: "444 KB",
      },
      {
        title: "Transfer Certificate",
        file: "transfer-certificate.pdf",
        size: "7.1 MB",
      },
      {
        title: "Grade X Results — Last Three Years",
        file: "grade-10-results-three-years.pdf",
        size: "391 KB",
      },
    ],
  },
];

const documentCount = documentGroups.reduce(
  (total, group) => total + group.documents.length,
  0,
);

export function DisclosurePage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="header-accent" aria-hidden="true" />
        <div className="container header-inner">
          <a
            className="brand"
            href="https://www.insightacademy.in/"
            aria-label="Insight Academy home"
          >
            <img src="/insight-logo.svg" alt="Insight Academy" />
          </a>
          <div className="review-pill">
            <span aria-hidden="true" />
            Client review copy
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-pattern" aria-hidden="true" />
          <div className="container hero-inner">
            <p className="breadcrumb">
              Insight Academy <span aria-hidden="true">/</span> Mandatory Disclosure
            </p>
            <div className="hero-layout">
              <div>
                <p className="kicker">Public information</p>
                <h1>CBSE Mandatory Disclosure</h1>
                <p className="hero-copy">
                  A complete collection of the school’s statutory certificates,
                  academic information and governance records.
                </p>
              </div>
              <div className="hero-stat" aria-label={`${documentCount} documents`}>
                <strong>{documentCount}</strong>
                <span>Verified PDF documents</span>
              </div>
            </div>
          </div>
        </section>

        <section className="documents-section" aria-labelledby="documents-heading">
          <div className="container">
            <div className="section-intro">
              <div>
                <p className="kicker">Documents</p>
                <h2 id="documents-heading">Mandatory public disclosures</h2>
              </div>
              <p>
                Select any document to view the official PDF in a new browser tab.
              </p>
            </div>

            <div className="document-groups">
              {documentGroups.map((group) => (
                <section className="document-group" key={group.id}>
                  <div className="group-heading">
                    <span>{group.eyebrow}</span>
                    <h3>{group.title}</h3>
                    <p>{group.documents.length} documents</p>
                  </div>

                  <div className="document-grid">
                    {group.documents.map((document) => {
                      const href = `/documents/${document.file}`;

                      return (
                        <article className="document-card" key={document.file}>
                          <div className="file-icon" aria-hidden="true">
                            <span>PDF</span>
                          </div>
                          <div className="document-details">
                            <h4>{document.title}</h4>
                            <p>PDF document · {document.size}</p>
                          </div>
                          <a
                            className="view-link"
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${document.title}`}
                          >
                            View PDF <span aria-hidden="true">↗</span>
                          </a>
                        </article>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="help-band">
          <div className="container help-inner">
            <div>
              <p className="kicker">Need assistance?</p>
              <h2>We’re here to help.</h2>
            </div>
            <div className="contact-links">
              <a href="mailto:info@insightacademy.in">info@insightacademy.in</a>
              <a href="tel:+918026667333">+91 80 2666 7333</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© 2026 Insight Academy. All rights reserved.</p>
          <p>CBSE Mandatory Disclosure</p>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return <DisclosurePage />;
}
