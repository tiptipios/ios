                const emotes1 = [{
                    value: "kochim",
                    text: "Mod Ko hành động"
                },
                    {
                        value: "caccho",
                        text: "Độc lang"
                    },
                    {
                        value: "sieunhanxanh",
                        text: "Rampage"
                    },
                    {
                        value: "quyvcl",
                        text: "hóa quỷ"
                    },
                    {
                        value: "acvcl",
                        text: "Ác nhân"
                    },
                    {
                        value: "thanvcl",
                        text: "Thần ma"
                    },
                    {
                        value: "longvcl",
                        text: "Hỏa Băng"
                    }];

                const emotes2 = [{
                    value: "caccho",
                    text: "Độc lang"
                },
                    {
                        value: "sieunhanxanh",
                        text: "Rampage"
                    },
                    {
                        value: "quyvcl",
                        text: "hóa quỷ"
                    },
                    {
                        value: "acvcl",
                        text: "Ác nhân"
                    },
                    {
                        value: "thanvcl",
                        text: "Thần ma"
                    },
                    {
                        value: "longvcl",
                        text: "Hỏa Băng"
                    }];

                const actionToMod1Element = document.getElementById('actionToMod1');
                const modAction1Element = document.getElementById('modAction1');

                emotes1.forEach(emote => {
                    const option = document.createElement('option');
                    option.value = emote.value;
                    option.textContent = emote.text;
                    actionToMod1Element.appendChild(option);
                });

                emotes2.forEach(emote => {
                    const option = document.createElement('option');
                    option.value = emote.value;
                    option.textContent = emote.text;
                    modAction1Element.appendChild(option);
                });

                function showModOptions1() {
                    const selectedValue = actionToMod1Element.value;
                    alert('Selected action: ' + selectedValue);
                }