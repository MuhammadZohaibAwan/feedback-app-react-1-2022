import Card from "../components/shared/card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this page</h1>
        <p>This is React app to leave feedback for a product or services </p>
        <p>Version: 1.0.0</p>
        <p>
          <a href="/">Back To home </a>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
