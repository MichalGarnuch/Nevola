import { test } from "vitest";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import { WnioskiTabela } from "../src/types/Wnioski/WnioskiTabela";
import { Logowanie } from "../src/page/LogowaniePage";

test("table renders the request data, not a type or a notification object", () => {
  const html = renderToStaticMarkup(
    <WnioskiTabela
      listaWnioskow={[
        {
          numer: "WN-17",
          nazwa: "Urlop",
          okres: "1–3 maja",
          data: "2026-04-12",
          odpowiedzialny: "Anna",
          etap: "Nowy",
        },
      ]}
    />,
  );
  assert.match(html, /WN-17/);
  assert.match(html, /Urlop/);
  assert.match(html, /<th scope="col">Numer/);
});
test("public demo does not collect a password or imply authenticated access", () => {
  const html = renderToStaticMarkup(
    <MemoryRouter>
      <Logowanie />
    </MemoryRouter>,
  );
  assert.match(html, /Otwórz demo/);
  assert.doesNotMatch(html, /type="password"/);
  assert.match(html, /Nie obsługuje kont/);
});
