import { useState } from "react";

import { Select } from "@/components/ui/select";
import { Switch } from "../ui/switch";

export default function ExtraTimeSettings() {
    const [enabled, setEnabled] = useState(true);
    const [extraTimeType, setExtraTimeType] = useState("Processing time after");
    const [extraTimeDuration, setExtraTimeDuration] = useState("15min");

    return (
        <div className="p-6 bg-white rounded-sm shadow-md w-full">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Extra time</h2>
                <Switch
                    checked={enabled}
                    onCheckedChange={setEnabled}
                    className={`$ {enabled ? "bg-purple-600" : "bg-gray-300"} relative inline-flex h-6 w-11 items-center rounded-full transition-all`}
                >
                    <span className="sr-only">Enable extra time</span>
                    <span
                        className={`$ {enabled ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                </Switch>
            </div>
            <p className="text-gray-500 text-sm mb-4">
                Automatically add blocked time or processing time after each appointment
            </p>
            {enabled && (
                <div className="flex space-x-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Extra time type</label>
                        <select
                            value={extraTimeType}
                            onChange={(e) => setExtraTimeType(e.target.value)}
                            className="mt-1 w-full p-2 border rounded-md"
                        >
                            <option>Processing time after</option>
                            <option>Blocked time after</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Extra time duration</label>
                        <select
                            value={extraTimeDuration}
                            onChange={(e) => setExtraTimeDuration(e.target.value)}
                            className="mt-1 w-full p-2 border rounded-md"
                        >
                            <option>5min</option>
                            <option>10min</option>
                            <option>15min</option>
                            <option>20min</option>
                            <option>30min</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    );
}
