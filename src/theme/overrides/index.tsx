import { merge } from "lodash";
import Card from "./Card";
import Lists from "./Lists";
import Paper from "./Paper";
import Input from "./Input";
import Button from "./Button";
import Fab from "./Fab";
import Tooltip from "./Tooltip";
import Backdrop from "./Backdrop";
import Typography from "./Typography";
import IconButton from "./IconButton";
import Autocomplete from "./Autocomplete";
import TextField from "./TextField";
import Toggle from "./Toggle";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: any) {
  return merge(
    Card(theme),
    Lists(theme),
    Paper(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme),
    TextField(theme),
    Fab(theme),
    Toggle(theme)
  );
}
