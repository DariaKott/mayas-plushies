export default function IndexPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.location.replace("./en/");',
        }}
      />
      <main
        style={{
          display: "grid",
          minHeight: "100vh",
          placeItems: "center",
          padding: "24px",
          textAlign: "center",
        }}
      >
        <p>
          Redirecting to the English storefront.
          {" "}
          <a href="./en/">Continue</a>
        </p>
      </main>
    </>
  );
}
