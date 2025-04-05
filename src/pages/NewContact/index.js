import PageHeader from "../../components/PageHeader";

import { Input } from "../../components/Utils/Input";
import { Select } from "../../components/Utils/Select";

export default function NewContact() {
  return (
    <>
      <PageHeader title="Novo Contato" />

      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
        <option value="456">Facebook</option>
        <option value="789">Twitter</option>
        <option value="1011">TikTok</option>
        <option value="1213">Orkut</option>
      </Select>
    </>
  );
}
