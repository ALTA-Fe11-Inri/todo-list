type DateType = {
  id?: number;
  date?: string;
};
export interface TodoType {
  id?: string;
  content?: string;
  description?: string;
  due?: DateType[];
  priority?: number;
  created_at?: string;
}
