function checkCookie(n) {
    for (var r = n + "=", u = document.cookie.split(";"), t, i = 0; i < u.length; i++) {
        for (t = u[i]; t.charAt(0) == " ";) t = t.substring(1);
        if (t.indexOf(r) == 0) return t.substring(r.length, t.length)
    }
    return null
}

function escapeHtml(n) {
    return String(n).replace(/[&<>"'`=\/]/g, function (n) {
        return entityMap[n]
    })
}

function escapeRegExp(n) {
    return n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function handleRedirectUrl(n, t, i) {
    var r = "uhfExtension ru",
        f = getCurrentUrlParameters(),
        u = t;
    getCookie(r) ? u = getCookie(r) : (u = buildRedirectUrl(t, f, i), setCookie(r, u, (new Date).getHours() + 1));
    passRedirectUrlToMeControl(u);
    n.on("click", function () {
        var t = getCookie(r);
        n.attr("href", t);
        deleteCookie(r)
    })
}

function passRedirectUrlToMeControl(n) {
    var t = {
        meControlOptions: {
            rpData: {
                msaInfo: {
                    signInUrl: n
                }
            }
        }
    };
    window.msCommonShell ? window.msCommonShell.load(t) : window.onShellReadyToLoad = function () {
        window.onShellReadyToLoad = null;
        window.msCommonShell.load(t)
    }
}

function getRedirectUrl(n) {
    var t, r = getCurrentUrlParameters(),
        i = "uhfExtension signUpru";
    return getCookie(i) ? t = getCookie(i) : setCookie(i, t = buildRedirectUrl(n, r, !0), (new Date).getHours() + 1), t
}

function setCookie(n, t, i) {
    new Date;
    document.cookie = n + "=" + t + ";expires=" + i + ";path=/;domain=.microsoft.com"
}

function getCookie(n) {
    var t = document.cookie.match(new RegExp(n + "=([^;]+)"));
    if (t) return t[1]
}

function deleteCookie(n) {
    document.cookie = n + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}

function getCurrentUrlParameters() {
    for (var n, i = window.location.search.substr(1).split("&"), r = new Map, t = 0; t < i.length; t++) n = i[t].split("="), n[1] && (r[decodeURIComponent(n[0])] = decodeURIComponent(n[1]));
    return r
}

function buildRedirectUrl(n, t, i) {
    var u = n,
        r, f;
    void 0 !== t.ru && (u = t.ru, delete t.ru);
    r = [];
    i && r.push("noSignUpCheck=1");
    for (f in t) r.push(encodeURIComponent(f) + "=" + encodeURIComponent(t[f]));
    return r.length > 0 && (u += null === u.match(/[?]/) ? "?" : "&"), u + r.join("&")
}

function handleSignUp(n, t, i) {
    var u, r = $(createForm(t, i)),
        f, e;
    for (r.insertAfter(n[0]), jQuery.validator.unobtrusive.parse(document), f = 0; f < n.length; f++) e = n[f], e.unbind(), e.attr("data-js-dialog-show", "uhfsignup"), e.on("click", function (n) {
        u = n.currentTarget;
        r.show();
        $("#uhf_sign_up_dialog").focus();
        n.preventDefault()
    });
    $("#uhf_close_sign_up_btn").on("click", function () {
        closeSignUpPopup(u, r)
    });
    $("#uhf_close_sign_up_btn").on("keyup", function (n) {
        13 === n.keyCode && closeSignUpPopup(u, r)
    });
    $("body").on("keyup", function (n) {
        27 === n.keyCode && closeSignUpPopup(u, r)
    })
}

function closeSignUpPopup(n, t) {
    t.hide();
    n.focus()
}

function createForm(n, t) {
    var r = '     <div class="c-dialog f-flow uhf-extension-scope" id="uhfsignup" aria-hidden="false" style="display: none">         <div role="presentation" tabindex="-1"><\/div>         <div id="uhf_sign_up_dialog" role="dialog" aria-label="aria-label-sign-up-popup" tabindex="-1" class="section-bottom05 modal">             <button id ="uhf_close_sign_up_btn" class="c-glyph glyph-cancel" data-js-dialog-hide="" aria-label="aria-label-close-dialog" tabindex="0"><\/button>             <div role="document">                 <div>                     <div data-grid="col-12" class="x-type-center">                         <h3 class="c-heading-3 padding-size0 x-hidden-focus">heading-text<\/h3>                         <p class="c-subheading">subheading-text<\/p>                         <div class="bapi-signup">                             <div data-grid="col-12" class="x-type-left">                                 <form id= "uhf-extension-sign-up-form" action="uhf-singup-form-action" class="" method="post" novalidate="novalidate">                                     <div data-grid="col-12 pad-6x">                                         <div data-grid="col-8">                                             <fieldset>                                             <input name="__RequestVerificationToken" type="hidden" value="uhf-form-verification-token">                                             <input id="FormOptions_Slug" name="FormOptions.Slug" type="hidden" value="signup">                                             <input id="FormOptions_EventName" name="FormOptions.EventName" type="hidden" value="">                                             <input id="FormOptions_SubmitRedirectUrl" name="FormOptions.SubmitRedirectUrl" type="hidden" value="uhf_submit_redirect_url">                                                 <div class="form-row">                                                     <span class="form-element">                                                         <input                                                             aria-label="aria-label-email-field"                                                             class="f-flex c-text-field"                                                             data-val="true"                                                             data-val-disallowedtldemail="You entered a disallowed top level domain: Please enter your work email address."                                                             data-val-disallowedtldemail-tlds=".gov,.mil"                                                             data-val-email="email-required-text"                                                             data-val-required="email-valid-text "                                                             id="UHFEmail" name="Email" placeholder="email-placeholder" type="text" value="">                                                         <span class="field-validation-valid" data-valmsg-for="Email" data-valmsg-replace="true" />                                                     <\/span>                                                 <\/div>                                             <\/fieldset>                                         <\/div>                                     <div data-grid="col-4">                                         <div class="form-navigation">                                             <button class="button c-button bapi-button-primary bapi-text-uppercase" aria-label="sign-up-button-text" id="uhf-signup-click" type="submit">                                             sign-up-button-text                                              <\/button>                                         <\/div>                                     <\/div>                                 <\/div>                                 <div class="row row-size0">                                     <div class="column medium-12 text-left">                                         <p class="text-mini terms">                                             uhf-terms-of-service                                         <\/p>                                         <p class="text-mini terms margin-top-12">                                             <a href="https://go.microsoft.com/fwlink/?LinkId=512132&clcid=0x409" target="_blank">                                                 uhf-privacy-statement                                             <\/a>                                         <\/p>                                     <\/div>                                 <\/div>                             <\/form>                         <\/div>                     <\/div>                 <\/div>             <\/div>         <\/div>     <\/div>     <\/div>     ',
        i, u, f;
    for (i in t) u = t[i], f = "uhf-terms-of-service" === i ? u : escapeHtml(u), r = r.replace(new RegExp("\\b" + escapeRegExp(i) + "\\b", "g"), f);
    for (i in n) f = escapeHtml(u = n[i]), r = r.replace(new RegExp("\\b" + escapeRegExp(i) + "\\b", "g"), f);
    return r
}

function prependSocialBanner(n, t, i, r) {
    var u = createBanner(n, t, r);
    $(i).prepend(u)
}

function createBanner(n, t, i) {
    var r = buildFollowMedia(n, escapeHtml(i[Labels.followPageLabel])),
        u = buildShareMedia(t, escapeHtml(i[Labels.sharePageLabel]));
    return '        <section data-grid="container" role="region" aria-label="' + escapeHtml(i[Labels.socialBannerLabel]) + '" class="uhf-social-share">            <div data-grid="col-12">' + r + u
}

function buildFollowMedia(n, t) {
    return buildSocialStructure(n.map(function (n) {
        return '<li>                     <a itemprop="sameAs" title="' + escapeHtml(n.accessibilityText) + '" aria-label="' + escapeHtml(n.accessibilityText) + '" href="' + escapeHtml(n.url) + '" target="_blank">                         <picture class="' + n.pictureClass + '">                             <source type="image/svg+xml" srcset="' + escapeHtml(n.imagePath) + '">                             <img src="' + escapeHtml(n.imagePath) + '" alt="' + escapeHtml(n.accessibilityText) + '" class="' + escapeHtml(n.class || "") + '">                         <\/picture>                     <\/a>                 <\/li>'
    }), t, "f-follow")
}

function buildShareMedia(n, t) {
    return buildSocialStructure(n.map(function (n) {
        return '<li>                     <a itemprop="sameAs" title="' + escapeHtml(n.accessibilityText) + '" aria-label="' + escapeHtml(n.accessibilityText) + '" data-href="' + escapeHtml(n.url) + "\" onclick=\"window.open(this.getAttribute('data-href'),'sharer','toolbar=0,status=0,resizable=yes,width=955,height=442');return false;\" href=\"javascript:void(0)\">                         <picture class=\"" + n.pictureClass + '">                             <source type="image/svg+xml" srcset="' + escapeHtml(n.imagePath) + '">                             <img src="' + escapeHtml(n.imagePath) + '" alt="' + escapeHtml(n.accessibilityText) + '" class="' + escapeHtml(n.class || "") + '">                         <\/picture>                     <\/a>                 <\/li>'
    }), escapeHtml(t), "f-share")
}

function buildSocialStructure(n, t, i) {
    return '    <div data-grid="col-6">       <div class="m-social f-horizontal ' + i + '" itemscope itemtype="http://schema.org/Organization">            <span aria-label="' + t + '">' + t + "<\/span>                <ul>" + n.join(" ") + "<\/ul>           <\/div>       <\/div>"
}

function enableStickyNavigation(n) {
    function e() {
        return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    }

    function o() {
        return $(".js-global-head").offset().top + $(".js-global-head").innerHeight()
    }

    function f(n) {
        if (r)
            for (var t = 0; t < r.length; t++) r[t].toggle(n)
    }
    var r = n,
        t = $(".js-cat-head"),
        u = ($("#headerArea").innerHeight(), $("<div/>")),
        i = function () {
            var n = $(window).scrollTop();
            e() > 767 && n >= o() ? t.hasClass("sticky") || (f(!0), t.addClass("sticky"), u.height(t.innerHeight())) : (f(!1), t.removeClass("sticky"), u.height(0))
        };
    u.insertBefore(t);
    i();
    $(window).on("scroll", i);
    $(window).on("resize", i);
    $(window).on("orientationchange", i)
}
var mwfVideoPlayer, entityMap, Labels;
(function (n) {
    n.extend(n.fn, {
        validate: function (t) {
            if (!this.length) return t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."), void 0;
            var i = n.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit && (this.validateDelegate(":submit", "click", function (t) {
                i.settings.submitHandler && (i.submitButton = t.target);
                n(t.target).hasClass("cancel") && (i.cancelSubmit = !0);
                void 0 !== n(t.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.submit(function (t) {
                function r() {
                    var r;
                    return i.settings.submitHandler ? (i.submitButton && (r = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && r.remove(), !1) : !0
                }
                return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
            })), i)
        },
        valid: function () {
            if (n(this[0]).is("form")) return this.validate().form();
            var t = !0,
                i = n(this[0].form).validate();
            return this.each(function () {
                t = t && i.element(this)
            }), t
        },
        removeAttrs: function (t) {
            var i = {},
                r = this;
            return n.each(t.split(/\s/), function (n, t) {
                i[t] = r.attr(t);
                r.removeAttr(t)
            }), i
        },
        rules: function (t, i) {
            var r = this[0],
                o, u, h;
            if (t) {
                var e = n.data(r.form, "validator").settings,
                    s = e.rules,
                    f = n.validator.staticRules(r);
                switch (t) {
                    case "add":
                        n.extend(f, n.validator.normalizeRule(i));
                        delete f.messages;
                        s[r.name] = f;
                        i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                        break;
                    case "remove":
                        return i ? (o = {}, n.each(i.split(/\s/), function (n, t) {
                            o[t] = f[t];
                            delete f[t]
                        }), o) : (delete s[r.name], f)
                }
            }
            return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (h = u.required, delete u.required, u = n.extend({
                required: h
            }, u)), u
        }
    });
    n.extend(n.expr[":"], {
        blank: function (t) {
            return !n.trim("" + n(t).val())
        },
        filled: function (t) {
            return !!n.trim("" + n(t).val())
        },
        unchecked: function (t) {
            return !n(t).prop("checked")
        }
    });
    n.validator = function (t, i) {
        this.settings = n.extend(!0, {}, n.validator.defaults, t);
        this.currentForm = i;
        this.init()
    };
    n.validator.format = function (t, i) {
        return 1 === arguments.length ? function () {
            var i = n.makeArray(arguments);
            return i.unshift(t), n.validator.format.apply(this, i)
        } : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function (n, i) {
            t = t.replace(RegExp("\\{" + n + "\\}", "g"), function () {
                return i
            })
        }), t)
    };
    n.extend(n.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: n([]),
            errorLabelContainer: n([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (n) {
                this.lastActive = n;
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(n)).hide())
            },
            onfocusout: function (n) {
                !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
            },
            onkeyup: function (n, t) {
                (9 !== t.which || "" !== this.elementValue(n)) && (n.name in this.submitted || n === this.lastElement) && this.element(n)
            },
            onclick: function (n) {
                n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
            },
            highlight: function (t, i, r) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
            },
            unhighlight: function (t, i, r) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
            }
        },
        setDefaults: function (t) {
            n.extend(n.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: n.validator.format("Please enter no more than {0} characters."),
            minlength: n.validator.format("Please enter at least {0} characters."),
            rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
            range: n.validator.format("Please enter a value between {0} and {1}."),
            max: n.validator.format("Please enter a value less than or equal to {0}."),
            min: n.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function i(t) {
                    var i = n.data(this[0].form, "validator"),
                        r = "on" + t.type.replace(/^validate/, "");
                    i.settings[r] && i.settings[r].call(i, this[0], t)
                }
                var r, t;
                this.labelContainer = n(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                r = this.groups = {};
                n.each(this.settings.groups, function (t, i) {
                    "string" == typeof i && (i = i.split(/\s/));
                    n.each(i, function (n, i) {
                        r[i] = t
                    })
                });
                t = this.settings.rules;
                n.each(t, function (i, r) {
                    t[i] = n.validator.normalizeRule(r)
                });
                n(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", i).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", i);
                this.settings.invalidHandler && n(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function () {
                return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function () {
                this.prepareForm();
                for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                return this.valid()
            },
            element: function (t) {
                t = this.validationTargetFor(this.clean(t));
                this.lastElement = t;
                this.prepareElement(t);
                this.currentElements = n(t);
                var i = this.check(t) !== !1;
                return i ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), i
            },
            showErrors: function (t) {
                if (t) {
                    n.extend(this.errorMap, t);
                    this.errorList = [];
                    for (var i in t) this.errorList.push({
                        message: t[i],
                        element: this.findByName(i)[0]
                    });
                    this.successList = n.grep(this.successList, function (n) {
                        return !(n.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function () {
                n.fn.resetForm && n(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            },
            objectLength: function (n) {
                var t = 0,
                    i;
                for (i in n) t++;
                return t
            },
            hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            },
            valid: function () {
                return 0 === this.size()
            },
            size: function () {
                return this.errorList.length
            },
            focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) { }
            },
            findLastActive: function () {
                var t = this.lastActive;
                return t && 1 === n.grep(this.errorList, function (n) {
                    return n.element.name === t.name
                }).length && t
            },
            elements: function () {
                var t = this,
                    i = {};
                return n(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in i || !t.objectLength(n(this).rules()) ? !1 : (i[this.name] = !0, !0)
                })
            },
            clean: function (t) {
                return n(t)[0]
            },
            errors: function () {
                var t = this.settings.errorClass.replace(" ", ".");
                return n(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function () {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = n([]);
                this.toHide = n([]);
                this.currentElements = n([])
            },
            prepareForm: function () {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function (n) {
                this.reset();
                this.toHide = this.errorsFor(n)
            },
            elementValue: function (t) {
                var r = n(t).attr("type"),
                    i = n(t).val();
                return "radio" === r || "checkbox" === r ? n("input[name='" + n(t).attr("name") + "']:checked").val() : "string" == typeof i ? i.replace(/\r/g, "") : i
            },
            check: function (t) {
                var r, u;
                t = this.validationTargetFor(this.clean(t));
                var i, f = n(t).rules(),
                    e = !1,
                    s = this.elementValue(t);
                for (r in f) {
                    u = {
                        method: r,
                        parameters: f[r]
                    };
                    try {
                        if (i = n.validator.methods[r].call(this, s, t, u.parameters), "dependency-mismatch" === i) {
                            e = !0;
                            continue
                        }
                        if (e = !1, "pending" === i) return this.toHide = this.toHide.not(this.errorsFor(t)), void 0;
                        if (!i) return this.formatAndAdd(t, u), !1
                    } catch (o) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + u.method + "' method.", o), o;
                    }
                }
                if (!e) return (this.objectLength(f) && this.successList.push(t), !0)
            },
            customDataMessage: function (t, i) {
                return n(t).data("msg-" + i.toLowerCase()) || t.attributes && n(t).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function (n, t) {
                var i = this.settings.messages[n];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function () {
                for (var n = 0; arguments.length > n; n++)
                    if (void 0 !== arguments[n]) return arguments[n];
                return void 0
            },
            defaultMessage: function (t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || void 0, n.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "<\/strong>")
            },
            formatAndAdd: function (t, i) {
                var r = this.defaultMessage(t, i.method),
                    u = /\$?\{(\d+)\}/g;
                "function" == typeof r ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters));
                this.errorList.push({
                    message: r,
                    element: t
                });
                this.errorMap[t.name] = r;
                this.submitted[t.name] = r
            },
            addWrapper: function (n) {
                return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
            },
            defaultShowErrors: function () {
                for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function () {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function () {
                return n(this.errorList).map(function () {
                    return this.element
                })
            },
            showLabel: function (t, i) {
                var r = this.errorsFor(t);
                r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(i || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, n(t)) : r.insertAfter(t)));
                !i && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t));
                this.toShow = this.toShow.add(r)
            },
            errorsFor: function (t) {
                var i = this.idOrName(t);
                return this.errors().filter(function () {
                    return n(this).attr("for") === i
                })
            },
            idOrName: function (n) {
                return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
            },
            validationTargetFor: function (n) {
                return this.checkable(n) && (n = this.findByName(n.name).not(this.settings.ignore)[0]), n
            },
            checkable: function (n) {
                return /radio|checkbox/i.test(n.type)
            },
            findByName: function (t) {
                return n(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function (t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case "select":
                        return n("option:selected", i).length;
                    case "input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function (n, t) {
                return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
            },
            dependTypes: {
                boolean: function (n) {
                    return n
                },
                string: function (t, i) {
                    return !!n(t, i.form).length
                },
                "function": function (n, t) {
                    return n(t)
                }
            },
            optional: function (t) {
                var i = this.elementValue(t);
                return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function (n) {
                this.pending[n.name] || (this.pendingRequest++ , this.pending[n.name] = !0)
            },
            stopRequest: function (t, i) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[t.name];
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function (t) {
                return n.data(t, "previousValue") || n.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function (t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
        },
        classRules: function (t) {
            var i = {},
                r = n(t).attr("class");
            return r && n.each(r.split(" "), function () {
                this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
            }), i
        },
        attributeRules: function (t) {
            var u = {},
                e = n(t),
                f = e[0].getAttribute("type"),
                r, i;
            for (r in n.validator.methods) "required" === r ? (i = e.get(0).getAttribute(r), "" === i && (i = !0), i = !!i) : i = e.attr(r), /min|max/.test(r) && (null === f || /number|range|text/.test(f)) && (i = Number(i)), i ? u[r] = i : f === r && "range" !== f && (u[r] = !0);
            return u.maxlength && /-1|2147483647|524288/.test(u.maxlength) && delete u.maxlength, u
        },
        dataRules: function (t) {
            var i, r, u = {},
                f = n(t);
            for (i in n.validator.methods) r = f.data("rule-" + i.toLowerCase()), void 0 !== r && (u[i] = r);
            return u
        },
        staticRules: function (t) {
            var i = {},
                r = n.data(t.form, "validator");
            return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function (t, i) {
            return n.each(t, function (r, u) {
                if (u === !1) return delete t[r], void 0;
                if (u.param || u.depends) {
                    var f = !0;
                    switch (typeof u.depends) {
                        case "string":
                            f = !!n(u.depends, i.form).length;
                            break;
                        case "function":
                            f = u.depends.call(i, i)
                    }
                    f ? t[r] = void 0 !== u.param ? u.param : !0 : delete t[r]
                }
            }), n.each(t, function (r, u) {
                t[r] = n.isFunction(u) ? u(i) : u
            }), n.each(["minlength", "maxlength"], function () {
                t[this] && (t[this] = Number(t[this]))
            }), n.each(["rangelength", "range"], function () {
                var i;
                t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), n.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function (t) {
            if ("string" == typeof t) {
                var i = {};
                n.each(t.split(/\s/), function () {
                    i[this] = !0
                });
                t = i
            }
            return t
        },
        addMethod: function (t, i, r) {
            n.validator.methods[t] = i;
            n.validator.messages[t] = void 0 !== r ? r : n.validator.messages[t];
            3 > i.length && n.validator.addClassRules(t, n.validator.normalizeRule(t))
        },
        methods: {
            required: function (t, i, r) {
                if (!this.depend(r, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var u = n(i).val();
                    return u && u.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : n.trim(t).length > 0
            },
            email: function (n, t) {
                return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(n)
            },
            url: function (n, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(n)
            },
            date: function (n, t) {
                return this.optional(t) || !/Invalid|NaN/.test("" + new Date(n))
            },
            dateISO: function (n, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(n)
            },
            number: function (n, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
            },
            digits: function (n, t) {
                return this.optional(t) || /^\d+$/.test(n)
            },
            creditcard: function (n, t) {
                var r, e;
                if (this.optional(t)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(n)) return !1;
                var f = 0,
                    i = 0,
                    u = !1;
                for (n = n.replace(/\D/g, ""), r = n.length - 1; r >= 0; r--) e = n.charAt(r), i = parseInt(e, 10), u && (i *= 2) > 9 && (i -= 9), f += i, u = !u;
                return 0 == f % 10
            },
            minlength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r
            },
            maxlength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || r >= u
            },
            rangelength: function (t, i, r) {
                var u = n.isArray(t) ? t.length : this.getLength(n.trim(t), i);
                return this.optional(i) || u >= r[0] && r[1] >= u
            },
            min: function (n, t, i) {
                return this.optional(t) || n >= i
            },
            max: function (n, t, i) {
                return this.optional(t) || i >= n
            },
            range: function (n, t, i) {
                return this.optional(t) || n >= i[0] && i[1] >= n
            },
            equalTo: function (t, i, r) {
                var u = n(r);
                return this.settings.onfocusout && u.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    n(i).valid()
                }), t === u.val()
            },
            remote: function (t, i, r) {
                var f, u, e;
                return this.optional(i) ? "dependency-mismatch" : (f = this.previousValue(i), this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), f.originalMessage = this.settings.messages[i.name].remote, this.settings.messages[i.name].remote = f.message, r = "string" == typeof r && {
                    url: r
                } || r, f.old === t) ? f.valid : (f.old = t, u = this, this.startRequest(i), e = {}, e[i.name] = t, n.ajax(n.extend(!0, {
                    url: r,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: e,
                    success: function (r) {
                        var e, h, s, o;
                        u.settings.messages[i.name].remote = f.originalMessage;
                        e = r === !0 || "true" === r;
                        e ? (h = u.formSubmitted, u.prepareElement(i), u.formSubmitted = h, u.successList.push(i), delete u.invalid[i.name], u.showErrors()) : (s = {}, o = r || u.defaultMessage(i, "remote"), s[i.name] = f.message = n.isFunction(o) ? o(t) : o, u.invalid[i.name] = !0, u.showErrors(s));
                        f.valid = e;
                        u.stopRequest(i, e)
                    }
                }, r)), "pending")
            }
        }
    });
    n.format = n.validator.format
})(jQuery),
    function (n) {
        var t = {},
            i;
        n.ajaxPrefilter ? n.ajaxPrefilter(function (n, i, r) {
            var u = n.port;
            "abort" === n.mode && (t[u] && t[u].abort(), t[u] = r)
        }) : (i = n.ajax, n.ajax = function (r) {
            var f = ("mode" in r ? r : n.ajaxSettings).mode,
                u = ("port" in r ? r : n.ajaxSettings).port;
            return "abort" === f ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
        })
    }(jQuery),
    function (n) {
        n.extend(n.fn, {
            validateDelegate: function (t, i, r) {
                return this.bind(i, function (i) {
                    var u = n(i.target);
                    if (u.is(t)) return r.apply(u, arguments)
                })
            }
        })
    }(jQuery),
    function (n) {
        function i(n, t, i) {
            n.rules[t] = i;
            n.message && (n.messages[t] = n.message)
        }

        function h(n) {
            return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
        }

        function f(n) {
            return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
        }

        function e(n) {
            return n.substr(0, n.lastIndexOf(".") + 1)
        }

        function o(n, t) {
            return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
        }

        function c(t, i) {
            var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']"),
                u = r.attr("data-valmsg-replace"),
                e = u ? n.parseJSON(u) !== !1 : null;
            r.removeClass("field-validation-valid").addClass("field-validation-error");
            t.data("unobtrusiveContainer", r);
            e ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide()
        }

        function l(t, i) {
            var u = n(this).find("[data-valmsg-summary=true]"),
                r = u.find("ul");
            r && r.length && i.errorList.length && (r.empty(), u.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(i.errorList, function () {
                n("<li />").html(this.message).appendTo(r)
            }))
        }

        function a(t) {
            var i = t.data("unobtrusiveContainer"),
                r = i.attr("data-valmsg-replace"),
                u = r ? n.parseJSON(r) : null;
            i && (i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), u && i.empty())
        }

        function v() {
            var t = n(this),
                i = "__jquery_unobtrusive_validation_form_reset";
            if (!t.data(i)) {
                t.data(i, !0);
                try {
                    t.data("validator").resetForm()
                } finally {
                    t.removeData(i)
                }
                t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
                t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
            }
        }

        function s(t) {
            var i = n(t),
                f = i.data(u),
                s = n.proxy(v, t),
                e = r.unobtrusive.options || {},
                o = function (i, r) {
                    var u = e[i];
                    u && n.isFunction(u) && u.apply(t, r)
                };
            return f || (f = {
                options: {
                    errorClass: e.errorClass || "input-validation-error",
                    errorElement: e.errorElement || "span",
                    errorPlacement: function () {
                        c.apply(t, arguments);
                        o("errorPlacement", arguments)
                    },
                    invalidHandler: function () {
                        l.apply(t, arguments);
                        o("invalidHandler", arguments)
                    },
                    messages: {},
                    rules: {},
                    success: function () {
                        a.apply(t, arguments);
                        o("success", arguments)
                    }
                },
                attachValidation: function () {
                    i.off("reset." + u, s).on("reset." + u, s).validate(this.options)
                },
                validate: function () {
                    return i.validate(), i.valid()
                }
            }, i.data(u, f)), f
        }
        var r = n.validator,
            t, u = "unobtrusiveValidation";
        r.unobtrusive = {
            adapters: [],
            parseElement: function (t, i) {
                var u = n(t),
                    f = u.parents("form")[0],
                    r, e, o;
                f && (r = s(f), r.options.rules[t.name] = e = {}, r.options.messages[t.name] = o = {}, n.each(this.adapters, function () {
                    var i = "data-val-" + this.name,
                        r = u.attr(i),
                        s = {};
                    r !== undefined && (i += "-", n.each(this.params, function () {
                        s[this] = u.attr(i + this)
                    }), this.adapt({
                        element: t,
                        form: f,
                        message: r,
                        params: s,
                        rules: e,
                        messages: o
                    }))
                }), n.extend(e, {
                    __dummy__: !0
                }), i || r.attachValidation())
            },
            parse: function (t) {
                var i = n(t),
                    u = i.parents().addBack().filter("form").add(i.find("form")).has("[data-val=true]");
                i.find("[data-val=true]").each(function () {
                    r.unobtrusive.parseElement(this, !0)
                });
                u.each(function () {
                    var n = s(this);
                    n && n.attachValidation()
                })
            }
        };
        t = r.unobtrusive.adapters;
        t.add = function (n, t, i) {
            return i || (i = t, t = []), this.push({
                name: n,
                params: t,
                adapt: i
            }), this
        };
        t.addBool = function (n, t) {
            return this.add(n, function (r) {
                i(r, t || n, !0)
            })
        };
        t.addMinMax = function (n, t, r, u, f, e) {
            return this.add(n, [f || "min", e || "max"], function (n) {
                var f = n.params.min,
                    e = n.params.max;
                f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
            })
        };
        t.addSingleVal = function (n, t, r) {
            return this.add(n, [t || "val"], function (u) {
                i(u, r || n, u.params[t])
            })
        };
        r.addMethod("__dummy__", function () {
            return !0
        });
        r.addMethod("regex", function (n, t, i) {
            var r;
            return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
        });
        r.addMethod("nonalphamin", function (n, t, i) {
            var r;
            return i && (r = n.match(/\W/g), r = r && r.length >= i), r
        });
        r.methods.extension ? (t.addSingleVal("accept", "mimtype"), t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept");
        t.addSingleVal("regex", "pattern");
        t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
        t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
        t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
        t.add("equalto", ["other"], function (t) {
            var r = e(t.element.name),
                u = t.params.other,
                s = o(u, r),
                h = n(t.form).find(":input").filter("[name='" + f(s) + "']")[0];
            i(t, "equalTo", h)
        });
        t.add("required", function (n) {
            (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
        });
        t.add("remote", ["url", "type", "additionalfields"], function (t) {
            var r = {
                url: t.params.url,
                type: t.params.type || "GET",
                data: {}
            },
                u = e(t.element.name);
            n.each(h(t.params.additionalfields || t.element.name), function (i, e) {
                var s = o(e, u);
                r.data[s] = function () {
                    var i = n(t.form).find(":input").filter("[name='" + f(s) + "']");
                    return i.is(":checkbox") ? i.filter(":checked").val() || i.filter(":hidden").val() || "" : i.is(":radio") ? i.filter(":checked").val() || "" : i.val()
                }
            });
            i(t, "remote", r)
        });
        t.add("password", ["min", "nonalphamin", "regex"], function (n) {
            n.params.min && i(n, "minlength", n.params.min);
            n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin);
            n.params.regex && i(n, "regex", n.params.regex)
        });
        n(function () {
            r.unobtrusive.parse(document)
        })
    }(jQuery);
window.Modernizr = function (n, t, i) {
    function a(n) {
        c.cssText = n
    }

    function vt(n, t) {
        return a(y.join(n + ";") + (t || ""))
    }

    function h(n, t) {
        return typeof n === t
    }

    function v(n, t) {
        return !!~("" + n).indexOf(t)
    }

    function lt(n, t) {
        var u, r;
        for (u in n)
            if (r = n[u], !v(r, "-") && c[r] !== i) return t == "pfx" ? r : !0;
        return !1
    }

    function yt(n, t, r) {
        var f, u;
        for (f in n)
            if (u = t[n[f]], u !== i) return r === !1 ? n[f] : h(u, "function") ? u.bind(r || t) : u;
        return !1
    }

    function f(n, t, i) {
        var r = n.charAt(0).toUpperCase() + n.slice(1),
            u = (n + " " + ot.join(r + " ") + r).split(" ");
        return h(t, "string") || h(t, "undefined") ? lt(u, t) : (u = (n + " " + st.join(r + " ") + r).split(" "), yt(u, t, i))
    }

    function pt() {
        u.input = function (i) {
            for (var r = 0, u = i.length; r < u; r++) w[i[r]] = !!(i[r] in o);
            return w.list && (w.list = !!(t.createElement("datalist") && n.HTMLDataListElement)), w
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));
        u.inputtypes = function (n) {
            for (var u = 0, r, f, e, h = n.length; u < h; u++) o.setAttribute("type", f = n[u]), r = o.type !== "text", r && (o.value = g, o.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && o.style.WebkitAppearance !== i ? (s.appendChild(o), e = t.defaultView, r = e.getComputedStyle && e.getComputedStyle(o, null).WebkitAppearance !== "textfield" && o.offsetHeight !== 0, s.removeChild(o)) : /^(search|tel)$/.test(f) || (r = /^(url|email)$/.test(f) ? o.checkValidity && o.checkValidity() === !1 : o.value != g)), ht[n[u]] = !!r;
            return ht
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var u = {},
        d = !0,
        s = t.documentElement,
        e = "modernizr",
        ut = t.createElement(e),
        c = ut.style,
        o = t.createElement("input"),
        g = ":)",
        ft = {}.toString,
        y = " -webkit- -moz- -o- -ms- ".split(" "),
        et = "Webkit Moz O ms",
        ot = et.split(" "),
        st = et.toLowerCase().split(" "),
        p = {
            svg: "http://www.w3.org/2000/svg"
        },
        r = {},
        ht = {},
        w = {},
        nt = [],
        tt = nt.slice,
        b, l = function (n, i, r, u) {
            var l, a, c, v, f = t.createElement("div"),
                h = t.body,
                o = h || t.createElement("body");
            if (parseInt(r, 10))
                while (r--) c = t.createElement("div"), c.id = u ? u[r] : e + (r + 1), f.appendChild(c);
            return l = ["&#173;", '<style id="s', e, '">', n, "<\/style>"].join(""), f.id = e, (h ? f : o).innerHTML += l, o.appendChild(f), h || (o.style.background = "", o.style.overflow = "hidden", v = s.style.overflow, s.style.overflow = "hidden", s.appendChild(o)), a = i(f, n), h ? f.parentNode.removeChild(f) : (o.parentNode.removeChild(o), s.style.overflow = v), !!a
        },
        at = function (t) {
            var i = n.matchMedia || n.msMatchMedia,
                r;
            return i ? i(t).matches : (l("@media " + t + " { #" + e + " { position: absolute; } }", function (t) {
                r = (n.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position == "absolute"
            }), r)
        },
        ct = function () {
            function r(r, u) {
                u = u || t.createElement(n[r] || "div");
                r = "on" + r;
                var f = r in u;
                return f || (u.setAttribute || (u = t.createElement("div")), u.setAttribute && u.removeAttribute && (u.setAttribute(r, ""), f = h(u[r], "function"), h(u[r], "undefined") || (u[r] = i), u.removeAttribute(r))), u = null, f
            }
            var n = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return r
        }(),
        it = {}.hasOwnProperty,
        rt, k;
    rt = h(it, "undefined") || h(it.call, "undefined") ? function (n, t) {
        return t in n && h(n.constructor.prototype[t], "undefined")
    } : function (n, t) {
        return it.call(n, t)
    };
    Function.prototype.bind || (Function.prototype.bind = function (n) {
        var t = this,
            i, r;
        if (typeof t != "function") throw new TypeError;
        return i = tt.call(arguments, 1), r = function () {
            var f, e, u;
            return this instanceof r ? (f = function () { }, f.prototype = t.prototype, e = new f, u = t.apply(e, i.concat(tt.call(arguments))), Object(u) === u) ? u : e : t.apply(n, i.concat(tt.call(arguments)))
        }, r
    });
    r.flexbox = function () {
        return f("flexWrap")
    };
    r.flexboxlegacy = function () {
        return f("boxDirection")
    };
    r.canvas = function () {
        var n = t.createElement("canvas");
        return !!(n.getContext && n.getContext("2d"))
    };
    r.canvastext = function () {
        return !!(u.canvas && h(t.createElement("canvas").getContext("2d").fillText, "function"))
    };
    r.webgl = function () {
        return !!n.WebGLRenderingContext
    };
    r.touch = function () {
        var i;
        return "ontouchstart" in n || n.DocumentTouch && t instanceof DocumentTouch ? i = !0 : l(["@media (", y.join("touch-enabled),("), e, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (n) {
            i = n.offsetTop === 9
        }), i
    };
    r.geolocation = function () {
        return "geolocation" in navigator
    };
    r.postmessage = function () {
        return !!n.postMessage
    };
    r.websqldatabase = function () {
        return !!n.openDatabase
    };
    r.indexedDB = function () {
        return !!f("indexedDB", n)
    };
    r.hashchange = function () {
        return ct("hashchange", n) && (t.documentMode === i || t.documentMode > 7)
    };
    r.history = function () {
        return !!(n.history && history.pushState)
    };
    r.draganddrop = function () {
        var n = t.createElement("div");
        return "draggable" in n || "ondragstart" in n && "ondrop" in n
    };
    r.websockets = function () {
        return "WebSocket" in n || "MozWebSocket" in n
    };
    r.rgba = function () {
        return a("background-color:rgba(150,255,150,.5)"), v(c.backgroundColor, "rgba")
    };
    r.hsla = function () {
        return a("background-color:hsla(120,40%,100%,.5)"), v(c.backgroundColor, "rgba") || v(c.backgroundColor, "hsla")
    };
    r.multiplebgs = function () {
        return a("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(c.background)
    };
    r.backgroundsize = function () {
        return f("backgroundSize")
    };
    r.borderimage = function () {
        return f("borderImage")
    };
    r.borderradius = function () {
        return f("borderRadius")
    };
    r.boxshadow = function () {
        return f("boxShadow")
    };
    r.textshadow = function () {
        return t.createElement("div").style.textShadow === ""
    };
    r.opacity = function () {
        return vt("opacity:.55"), /^0.55$/.test(c.opacity)
    };
    r.cssanimations = function () {
        return f("animationName")
    };
    r.csscolumns = function () {
        return f("columnCount")
    };
    r.cssgradients = function () {
        var n = "background-image:";
        return a((n + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + n) + y.join("linear-gradient(left top,#9f9, white);" + n)).slice(0, -n.length)), v(c.backgroundImage, "gradient")
    };
    r.cssreflections = function () {
        return f("boxReflect")
    };
    r.csstransforms = function () {
        return !!f("transform")
    };
    r.csstransforms3d = function () {
        var n = !!f("perspective");
        return n && "webkitPerspective" in s.style && l("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t) {
            n = t.offsetLeft === 9 && t.offsetHeight === 3
        }), n
    };
    r.csstransitions = function () {
        return f("transition")
    };
    r.fontface = function () {
        var n;
        return l('@font-face {font-family:"font";src:url("https://")}', function (i, r) {
            var f = t.getElementById("smodernizr"),
                u = f.sheet || f.styleSheet,
                e = u ? u.cssRules && u.cssRules[0] ? u.cssRules[0].cssText : u.cssText || "" : "";
            n = /src/i.test(e) && e.indexOf(r.split(" ")[0]) === 0
        }), n
    };
    r.generatedcontent = function () {
        var n;
        return l(["#", e, "{font:0/0 a}#", e, ':after{content:"', g, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            n = t.offsetHeight >= 3
        }), n
    };
    r.video = function () {
        var i = t.createElement("video"),
            n = !1;
        try {
            (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (r) { }
        return n
    };
    r.audio = function () {
        var i = t.createElement("audio"),
            n = !1;
        try {
            (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = i.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (r) { }
        return n
    };
    r.localstorage = function () {
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (n) {
            return !1
        }
    };
    r.sessionstorage = function () {
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
        } catch (n) {
            return !1
        }
    };
    r.webworkers = function () {
        return !!n.Worker
    };
    r.applicationcache = function () {
        return !!n.applicationCache
    };
    r.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(p.svg, "svg").createSVGRect
    };
    r.inlinesvg = function () {
        var n = t.createElement("div");
        return n.innerHTML = "<svg/>", (n.firstChild && n.firstChild.namespaceURI) == p.svg
    };
    r.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(ft.call(t.createElementNS(p.svg, "animate")))
    };
    r.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(ft.call(t.createElementNS(p.svg, "clipPath")))
    };
    for (k in r) rt(r, k) && (b = k.toLowerCase(), u[b] = r[k](), nt.push((u[b] ? "" : "no-") + b));
    return u.input || pt(), u.addTest = function (n, t) {
        if (typeof n == "object")
            for (var r in n) rt(n, r) && u.addTest(r, n[r]);
        else {
            if (n = n.toLowerCase(), u[n] !== i) return u;
            t = typeof t == "function" ? t() : t;
            typeof d != "undefined" && d && (s.className += " " + (t ? "" : "no-") + n);
            u[n] = t
        }
        return u
    }, a(""), ut = o = null,
        function (n, t) {
            function p(n, t) {
                var i = n.createElement("p"),
                    r = n.getElementsByTagName("head")[0] || n.documentElement;
                return i.innerHTML = "x<style>" + t + "<\/style>", r.insertBefore(i.lastChild, r.firstChild)
            }

            function c() {
                var n = r.elements;
                return typeof n == "string" ? n.split(" ") : n
            }

            function o(n) {
                var t = h[n[s]];
                return t || (t = {}, e++ , n[s] = e, h[e] = t), t
            }

            function l(n, r, u) {
                if (r || (r = t), i) return r.createElement(n);
                u || (u = o(r));
                var f;
                return f = u.cache[n] ? u.cache[n].cloneNode() : y.test(n) ? (u.cache[n] = u.createElem(n)).cloneNode() : u.createElem(n), f.canHaveChildren && !v.test(n) ? u.frag.appendChild(f) : f
            }

            function w(n, r) {
                if (n || (n = t), i) return n.createDocumentFragment();
                r = r || o(n);
                for (var f = r.frag.cloneNode(), u = 0, e = c(), s = e.length; u < s; u++) f.createElement(e[u]);
                return f
            }

            function b(n, t) {
                t.cache || (t.cache = {}, t.createElem = n.createElement, t.createFrag = n.createDocumentFragment, t.frag = t.createFrag());
                n.createElement = function (i) {
                    return r.shivMethods ? l(i, n, t) : t.createElem(i)
                };
                n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/\w+/g, function (n) {
                    return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")'
                }) + ");return n}")(r, t.frag)
            }

            function a(n) {
                n || (n = t);
                var u = o(n);
                return !r.shivCSS || f || u.hasCSS || (u.hasCSS = !!p(n, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), i || b(n, u), n
            }
            var u = n.html5 || {},
                v = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                y = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                f, s = "_html5shiv",
                e = 0,
                h = {},
                i, r;
            (function () {
                try {
                    var n = t.createElement("a");
                    n.innerHTML = "<xyz><\/xyz>";
                    f = "hidden" in n;
                    i = n.childNodes.length == 1 || function () {
                        t.createElement("a");
                        var n = t.createDocumentFragment();
                        return typeof n.cloneNode == "undefined" || typeof n.createDocumentFragment == "undefined" || typeof n.createElement == "undefined"
                    }()
                } catch (r) {
                    f = !0;
                    i = !0
                }
            })();
            r = {
                elements: u.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                shivCSS: u.shivCSS !== !1,
                supportsUnknownElements: i,
                shivMethods: u.shivMethods !== !1,
                type: "default",
                shivDocument: a,
                createElement: l,
                createDocumentFragment: w
            };
            n.html5 = r;
            a(t)
        }(this, t), u._version = "2.6.2", u._prefixes = y, u._domPrefixes = st, u._cssomPrefixes = ot, u.mq = at, u.hasEvent = ct, u.testProp = function (n) {
            return lt([n])
        }, u.testAllProps = f, u.testStyles = l, u.prefixed = function (n, t, i) {
            return t ? f(n, t, i) : f(n, "pfx")
        }, s.className = s.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (d ? " js " + nt.join(" ") : ""), u
}(this, this.document);
window.matchMedia = window.matchMedia || function (n) {
    var u, i = n.documentElement,
        f = i.firstElementChild || i.firstChild,
        r = n.createElement("body"),
        t = n.createElement("div");
    return t.id = "mq-test-1", t.style.cssText = "position:absolute;top:-100em", r.style.background = "none", r.appendChild(t),
        function (n) {
            return t.innerHTML = '&shy;<style media="' + n + '"> #mq-test-1 { width: 42px; }<\/style>', i.insertBefore(r, f), u = t.offsetWidth == 42, i.removeChild(r), {
                matches: u,
                media: n
            }
        }
}(document),
    function (n) {
        function d() {
            a(!0)
        }
        if (n.respond = {}, respond.update = function () { }, respond.mediaQueriesSupported = n.matchMedia && n.matchMedia("only all").matches, !respond.mediaQueriesSupported) {
            var t = n.document,
                i = t.documentElement,
                e = [],
                u = [],
                r = [],
                o = {},
                v = 30,
                f = t.getElementsByTagName("head")[0] || i,
                g = t.getElementsByTagName("base")[0],
                s = f.getElementsByTagName("link"),
                h = [],
                y = function () {
                    for (var f = s, c = f.length, r = 0, t, i, u, e; r < c; r++) t = f[r], i = t.href, u = t.media, e = t.rel && t.rel.toLowerCase() === "stylesheet", !i || !e || o[i] || (t.styleSheet && t.styleSheet.rawCssText ? (w(t.styleSheet.rawCssText, i, u), o[i] = !0) : (/^([a-zA-Z:]*\/\/)/.test(i) || g) && i.replace(RegExp.$1, "").split("/")[0] !== n.location.host || h.push({
                        href: i,
                        media: u
                    }));
                    p()
                },
                p = function () {
                    if (h.length) {
                        var n = h.shift();
                        nt(n.href, function (t) {
                            w(t, n.href, n.media);
                            o[n.href] = !0;
                            p()
                        })
                    }
                },
                w = function (n, t, i) {
                    var o = n.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),
                        s = o && o.length || 0,
                        t = t.substring(0, t.lastIndexOf("/")),
                        v = function (n) {
                            return n.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + t + "$2$3")
                        },
                        y = !s && i,
                        h = 0,
                        f, c, r, l, p;
                    for (t.length && (t += "/"), y && (s = 1); h < s; h++)
                        for (f = 0, y ? (c = i, u.push(v(n))) : (c = o[h].match(/@media *([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, u.push(RegExp.$2 && v(RegExp.$2))), l = c.split(","), p = l.length; f < p; f++) r = l[f], e.push({
                            media: r.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/) && RegExp.$2 || "all",
                            rules: u.length - 1,
                            hasquery: r.indexOf("(") > -1,
                            minw: r.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: r.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        });
                    a()
                },
                c, b, k = function () {
                    var u, r = t.createElement("div"),
                        n = t.body,
                        f = !1;
                    return r.style.cssText = "position:absolute;font-size:1em;width:1em", n || (n = f = t.createElement("body"), n.style.background = "none"), n.appendChild(r), i.insertBefore(n, i.firstChild), u = r.offsetWidth, f ? i.removeChild(n) : n.removeChild(r), l = parseFloat(u)
                },
                l, a = function (n) {
                    var nt = "clientWidth",
                        tt = i[nt],
                        it = t.compatMode === "CSS1Compat" && tt || t.body[nt] || tt,
                        d = {},
                        ot = s[s.length - 1],
                        rt = (new Date).getTime(),
                        o, h, g;
                    if (n && c && rt - c < v) {
                        clearTimeout(b);
                        b = setTimeout(a, v);
                        return
                    }
                    c = rt;
                    for (o in e) {
                        var y = e[o],
                            p = y.minw,
                            w = y.maxw,
                            ut = p === null,
                            ft = w === null,
                            et = "em";
                        !p || (p = parseFloat(p) * (p.indexOf(et) > -1 ? l || k() : 1));
                        !w || (w = parseFloat(w) * (w.indexOf(et) > -1 ? l || k() : 1));
                        y.hasquery && (ut && ft || !(ut || it >= p) || !(ft || it <= w)) || (d[y.media] || (d[y.media] = []), d[y.media].push(u[y.rules]))
                    }
                    for (o in r) r[o] && r[o].parentNode === f && f.removeChild(r[o]);
                    for (o in d) h = t.createElement("style"), g = d[o].join("\n"), h.type = "text/css", h.media = o, f.insertBefore(h, ot.nextSibling), h.styleSheet ? h.styleSheet.cssText = g : h.appendChild(t.createTextNode(g)), r.push(h)
                },
                nt = function (n, t) {
                    var i = tt();
                    i && (i.open("GET", n, !0), i.onreadystatechange = function () {
                        i.readyState == 4 && (i.status == 200 || i.status == 304) && t(i.responseText)
                    }, i.readyState != 4) && i.send(null)
                },
                tt = function () {
                    var n = !1;
                    try {
                        n = new XMLHttpRequest
                    } catch (t) {
                        n = new ActiveXObject("Microsoft.XMLHTTP")
                    }
                    return function () {
                        return n
                    }
                }();
            y();
            respond.update = y;
            n.addEventListener ? n.addEventListener("resize", d, !1) : n.attachEvent && n.attachEvent("onresize", d)
        }
    }(this),
    function (n) {
        "use strict";
        var t = function (n, t) {
            var i;
            return function () {
                var r = arguments;
                clearTimeout(i);
                i = setTimeout(function () {
                    n.apply(null, r)
                }, t)
            }
        },
            i = function (n, t, i) {
                var r = document.createElement(n),
                    u = document.getElementsByTagName(n)[0];
                r.async = i;
                r.src = t;
                u.parentNode.insertBefore(r, u)
            };
        window.addJavascript = i;
        n.sd = n.sd || {};
        n.sd.debounce = t
    }(window),
    function (n) {
        "use strict";

        function r(n) {
            return n.data("set") || s
        }

        function u(n, i) {
            var u = $(i),
                f = r(u);
            delete t[f];
            u.height("auto")
        }

        function e(n, i) {
            var f = $(i),
                e = f.height(),
                u = r(f);
            (!t[u] || e > t[u]) && (t[u] = e)
        }

        function o(n, i) {
            var e = $(i),
                o = r(e),
                s = e.data("min-width");
            f[s] && window.innerWidth < f[s] || !t[o] ? u(e, o) : e.height(t[o])
        }

        function i() {
            var n = $(".sd-equalize");
            n.each(u);
            n.each(e);
            n.each(o)
        }

        function h(n) {
            var t = $(n + " .sd-equalize");
            t.each(u);
            t.each(e);
            t.each(o)
        }

        function c() {
            i();
            setTimeout(i, 200)
        }
        var t = {},
            s = "default-equalize-set",
            f = {
                small: 540,
                medium: 768,
                "medium-large": 960,
                large: 1084,
                "x-large": 1400
            };
        $(c);
        $(window).on("resize load", n(i, 10));
        $("body").on("equalize.sundog", i);
        $("body").on("equalize.tabchange", function (t, i) {
            n(h(i), 0)
        })
    }(sd.debounce),
    function (n) {
        "use strict";

        function i() {
            var i = u(),
                o = f();
            e() && (o = i.offset().top + i.innerHeight(), i = n(".dyn-subpages-menu"));
            window.innerWidth > 1023 && r("");
            n(window).scrollTop() > o ? i.hasClass("dyn-sticky-nav-fixed") || (i.addClass("dyn-sticky-nav-fixed"), window.innerWidth < 1023 && (r("fixed"), n(".c-uhfh>div+div nav").css({
                top: "100px"
            })), t === "light" && (i.removeClass("theme-light").addClass("theme-light"), n('img[itemprop="logo"]').attr("src", "https://assets.onestore.ms/cdnfiles/external/uhf/long/9a49a7e9d8e881327e81b9eb43dabc01de70a9bb/images/microsoft-gray.png"))) : (i.removeClass("dyn-sticky-nav-fixed"), r(""), n(".c-uhfh>div+div nav").css({
                top: "50px"
            }), t === "light" && (i.removeClass("theme-light").addClass("theme-light"), n('img[itemprop="logo"]').attr("src", "https://assets.onestore.ms/cdnfiles/external/uhf/long/9a49a7e9d8e881327e81b9eb43dabc01de70a9bb/images/microsoft-gray.png")))
        }

        function u() {
            return window.innerWidth > 1023 ? (n(".js-global-head.hide-in-desktop").removeClass("dyn-sticky-nav-fixed"), n(".js-cat-head")) : (n(".js-cat-head").removeClass("dyn-sticky-nav-fixed"), n(".js-global-head.hide-in-desktop"))
        }

        function f() {
            var t = n(".cookie-banner").offset();
            return t !== undefined ? t.top + n(".cookie-banner").innerHeight() : 0
        }

        function e() {
            return window.innerWidth > 1023 && n(".dyn-subpages-menu").length > 0
        }

        function r(t) {
            n(".c-uhfh>div+div nav").css({
                position: t
            });
            n(".c-uhfh>div:first-child nav").css({
                position: t
            })
        }
        var t;
        document.addEventListener("DOMContentLoaded", function () {
            t = n(".js-global-head.f-transparent").hasClass("theme-light") ? "light" : "light";
            i();
            document.addEventListener("scroll", i);
            n(window).on("resize", i)
        })
    }(jQuery, window),
    function (n, t) {
        "use strict";

        function r(t) {
            var r = n("#" + n(t).data("js-dialog-show")),
                f = n(t).data("video-embed");
            i(f) || i(r) || u(r, f)
        }

        function u(t, i) {
            n(t).find("iframe").remove();
            n('<iframe frameborder="0" src="' + i + '" allowfullscreen><\/iframe>').appendTo(n(t).find("[role=document]"))
        }

        function i(n) {
            return n === undefined || n === null
        }

        function f() {
            var r = document.querySelector("#modal-video"),
                u;
            i(r) || t.mwf.ComponentFactory.create([{
                c: t.mwf.Dialog,
                elements: [r],
                callback: function (t) {
                    t && t.length && (u = t[0], u.subscribe({
                        onHidden: function () {
                            n(r).find("iframe").remove()
                        },
                        onShown: function () {
                            n(r).find(".glyph-cancel").focus().removeClass("x-hidden-focus")
                        }
                    }))
                },
                eventToBind: "DOMContentLoaded"
            }])
        }

        function e() {
            n(document).ready(function () {
                n(".modal-video-link[data-js-dialog-show]").each(function () {
                    n(this).on("click", function (n) {
                        n.preventDefault();
                        r(this)
                    })
                });
                f()
            })
        }
        e()
    }(jQuery, window),
    function (n, t) {
        "use strict";

        function i(t) {
            setTimeout(function () {
                var i = "." + t;
                n("body").trigger("equalize.tabchange", [i])
            }, 1)
        }

        function r(t, r) {
            n("#btnCollapse-" + r).removeClass("dis-non");
            t ? (n("#inclusion-" + r).clone(!0, !0).appendTo("#ItemContainer-" + r), n("#additionalusers-" + r).clone(!0, !0).appendTo("#ItemContainer-" + r), n("#btnExpand-" + r).hide(), n("#btnCollapse-" + r).show()) : (n("#ItemContainer-" + r).empty(), n("#btnExpand-" + r).show(), n("#btnCollapse-" + r).hide());
            i("view-mobile-only")
        }
        t.pricing = t.pricing || {};
        t.pricing.onTabSelection = i;
        t.pricing.ToggleContent = r
    }(jQuery, window);
mwfVideoPlayer = function (n) {
    function t(r) {
        if (i[r]) return i[r].exports;
        var u = i[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return n[r].call(u.exports, u, u.exports, t), u.loaded = !0, u.exports
    }
    var i = {};
    return t.m = n, t.c = i, t.p = "", t(0)
}([function (n, t, i) {
    var u, r;
    u = [i, t, i(3), i(4), i(32), i(18), i(17), i(19), i(20), i(16), i(22), i(7), i(2), i(31), i(1), i(28), i(15), i(5), i(30), i(29), i(27), i(26), i(24), i(25), i(6), i(23), i(21)];
    r = function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k, d, g, nt, tt, it, rt, ut, ft) {
        "use strict";

        function et(n) {
            for (var i in n) t.hasOwnProperty(i) || (t[i] = n[i])
        }
        et(i);
        et(r);
        et(u);
        et(f);
        et(e);
        et(o);
        et(s);
        et(h);
        et(c);
        et(l);
        et(a);
        et(v);
        et(y);
        et(p);
        et(w);
        et(b);
        et(k);
        et(d);
        et(g);
        et(nt);
        et(tt);
        et(it);
        et(rt);
        et(ut);
        et(ft)
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(2)];
    r = function (n, t, i) {
        "use strict";
        var r = function () {
            function n() { }
            return n.resourcePath = "https://assets.onestore.ms/cdnfiles/external/mwf/long/v1/v1.20.2/resources", n.localResourcePath = "/resources", n.ampUrl = "//amp.azure.net/libs/amp/1.8.0/azuremediaplayer.min.js", n.continueInterval = 2e4, n.firstByteTimeoutVideoMobile = 2e4, n.firstByteTimeoutVideoDesktop = 1e4, n.defaultVolume = .75, n.checkpoints = [25, 50, 75, 95], n.playbackRates = [2, 1.5, 1.25, 1, .75, .5], n.defaultPlaybackRate = 1, n.defaultQualityMobile = i.MediaQuality.SD, n.defaultQualityTV = i.MediaQuality.SD, n.defaultQualityDesktop = i.MediaQuality.HQ, n
        }();
        t.PlayerConfig = r
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t];
    r = function (n, t) {
        "use strict";
        ! function (n) {
            n[n.MP4 = "MP4"] = "MP4";
            n[n.DASH = "DASH"] = "DASH";
            n[n.SMOOTH = "SMOOTH"] = "SMOOTH";
            n[n.HLS = "HLS"] = "HLS"
        }(t.MediaTypes || (t.MediaTypes = {}));
        t.MediaTypes;
        ! function (n) {
            n[n.HD = "HD"] = "HD";
            n[n.HQ = "HQ"] = "HQ";
            n[n.SD = "SD"] = "SD";
            n[n.LO = "LO"] = "LO"
        }(t.MediaQuality || (t.MediaQuality = {}));
        t.MediaQuality;
        ! function (n) {
            n[n.BufferingFirstByteTimeout = 2e3] = "BufferingFirstByteTimeout";
            n[n.MediaErrorAborted = 2100] = "MediaErrorAborted";
            n[n.MediaErrorNetwork = 2101] = "MediaErrorNetwork";
            n[n.MediaErrorDecode = 2102] = "MediaErrorDecode";
            n[n.MediaErrorSourceNotSupported = 2103] = "MediaErrorSourceNotSupported";
            n[n.MediaErrorUnknown = 2104] = "MediaErrorUnknown";
            n[n.MediaSelectionNoMedia = 2200] = "MediaSelectionNoMedia";
            n[n.AmpEncryptError = 2405] = "AmpEncryptError";
            n[n.AmpPlayerMismatch = 2406] = "AmpPlayerMismatch"
        }(t.VideoErrorCodes || (t.VideoErrorCodes = {}));
        t.VideoErrorCodes
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(4), i(11), i(9), i(31), i(11), i(24)];
    r = function (n, t, i, r, u, f, e, o) {
        "use strict";
        var s = function () {
            function n(t, i) {
                var u, e;
                (this.videoComponent = t, this.playerData = {}, t) && (u = "object" == typeof i ? i : {}, i && i.options || (e = this.videoComponent.getAttribute(n.playerDataAttribute), e && (u = r.parseJson(e))), this.playerData.options = new f.PlayerOptions(u.options), this.playerData.metadata = u.metadata, this.playerData.options.autoload && this.load())
            }
            return n.prototype.setupContainer = function (t) {
                this.externalPlayerElement = u.selectFirstElement(n.externalPlayerContainer, this.videoComponent);
                this.corePlayerElement = u.selectFirstElement(n.corePlayerContainer, this.videoComponent);
                !this.externalPlayerElement && t && (this.externalPlayerElement = document.createElement("div"), this.externalPlayerElement.setAttribute("class", n.externalPlayerContainer), this.videoComponent.appendChild(this.externalPlayerElement));
                this.updateContainerVisibility(this.corePlayerElement, t);
                this.updateContainerVisibility(this.externalPlayerElement, !t);
                u.removeInnerHtml(this.externalPlayerElement)
            }, n.prototype.updateContainerVisibility = function (n, t) {
                if (n) {
                    var i = t ? "true" : "false";
                    n.setAttribute("aria-hidden", i)
                }
            }, n.prototype.load = function (t) {
                t && (e.extend(this.playerData.options, t.options), this.playerData.metadata = t.metadata);
                this.currentPlayer && this.dispose();
                this.videoComponent.getAttribute("id") || this.videoComponent.setAttribute("id", o.PlayerUtility.random4CharString());
                this.playerData.options && this.playerData.options.debug && this.videoComponent.setAttribute("data-debug", "true");
                var r = this.playerData.metadata && this.playerData.metadata.playerName || n.defaultPlayerName,
                    u = r !== n.defaultPlayerName;
                this.setupContainer(u);
                this.currentPlayer = i.PlayerFactory.createPlayer(r, this.videoComponent, this.playerData)
            }, n.prototype.dispose = function () {
                this.currentPlayer && (this.currentPlayer.dispose(), this.currentPlayer = null);
                u.removeInnerHtml(this.videoComponent)
            }, n.prototype.play = function () {
                this.currentPlayer && this.currentPlayer.play()
            }, n.prototype.pause = function () {
                this.currentPlayer && this.currentPlayer.pause()
            }, n.prototype.mute = function () {
                this.currentPlayer && this.currentPlayer.mute()
            }, n.prototype.unmute = function () {
                this.currentPlayer && this.currentPlayer.unmute()
            }, n.selector = ".c-video-player", n.corePlayerContainer = ".f-core-player", n.externalPlayerContainer = ".f-external-player", n.playerDataAttribute = "data-player-data", n.defaultPlayerName = "coreplayer", n
        }();
        t.VideoPlayer = s
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(5), i(29)];
    r = function (n, t, i, r) {
        "use strict";
        var u = function () {
            function n() { }
            return n.createPlayer = function (n, t, u) {
                var f;
                if (n) switch (n.toLowerCase()) {
                    case "youtube":
                        f = new r.YoutubePlayer(t, u);
                        break;
                    default:
                        f = new i.CorePlayer(t, u)
                }
                return f || new i.CorePlayer(t, u)
            }, n
        }();
        t.PlayerFactory = u
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(7), i(16), i(11), i(9), i(10), i(2), i(21), i(23), i(6), i(25), i(24), i(22), i(26), i(15), i(1), i(28), i(22)];
    r = function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y, p, w, b, k) {
        "use strict";
        var d = {
            Init: "init",
            Loading: "loading",
            Ready: "ready",
            Playing: "playing",
            Paused: "paused",
            Buffering: "buffering",
            Seeking: "seeking",
            Ended: "ended",
            Error: "error",
            Stopped: "stopped"
        },
            g = [o.MediaQuality.HD, o.MediaQuality.HQ, o.MediaQuality.SD, o.MediaQuality.LO],
            nt = function () {
                function n(t, i) {
                    var r = this;
                    this.videoComponent = t;
                    this.canPlay = !1;
                    this.errorMessageDisplayed = !1;
                    this.isInFullscreen = !1;
                    this.videoMetadata = null;
                    this.playerOptions = null;
                    this.isBuffering = !1;
                    this.isWindowClosing = !1;
                    this.isFirstTimePlayed = !0;
                    this.isVideoMuted = !1;
                    this.commonPlayerImpressionReported = !1;
                    this.seekFrom = null;
                    this.playerTechnology = null;
                    this.nextCheckpoint = null;
                    this.stopwatchBuffering = new l.Stopwatch;
                    this.stopwatchLoading = new l.Stopwatch;
                    this.stopwatchPlaying = new l.Stopwatch;
                    this.firstByteTimer = null;
                    this.lastVolume = 1;
                    this.currentVideoFile = null;
                    this.reporters = [];
                    this.playOnDataLoad = !1;
                    this.startTimeOnDataLoad = 0;
                    this.locReady = !1;
                    this.onResoucesLoaded = function () {
                        r.initializeVideoControls();
                        r.locReady = !0
                    };
                    this.onMediaEvent = function (n) {
                        if (n) switch (f.customEvent(r.videoComponent, n.type, {
                            bubbles: n.bubbles,
                            cancelable: n.cancelable
                        }), n.type.toLowerCase()) {
                                case "canplay":
                                case "canplaythrough":
                                    r.onVideoCanPlay(n);
                                    break;
                                case "error":
                                    r.onVideoError(n);
                                    break;
                                case "play":
                                    r.onVideoPlay(n);
                                    break;
                                case "pause":
                                    r.onVideoPause(n);
                                    break;
                                case "seeking":
                                    r.onVideoSeeking(n);
                                    break;
                                case "seeked":
                                    r.onVideoSeeked(n);
                                    break;
                                case "waiting":
                                    r.onVideoWaiting(n);
                                    break;
                                case "loadedmetadata":
                                    r.onVideoMetadataLoaded();
                                    break;
                                case "loadeddata":
                                    r.onVideoLoadedData();
                                    break;
                                case "timeupdate":
                                    r.onVideoTimeUpdate();
                                    break;
                                case "ended":
                                    r.onVideoEnded();
                                    break;
                                case "playing":
                                    r.onVideoPlaying();
                                    break;
                                case "volumechange":
                                    r.onVideoVolumeChange(n)
                            }
                    };
                    this.onVideoPlaying = function () {
                        r.updateState(d.Playing);
                        r.videoControls && r.videoWrapper && r.videoControls.setDuration(r.getDuration());
                        r.setNextCheckpoint();
                        r.isFirstTimePlayed && (r.isFirstTimePlayed = !1, r.reportEvent(v.PlayerEvents.ContentStart));
                        c.Environment.isAndroid && (r.logMessage("re-invoking play for Android only"), r.videoWrapper.play())
                    };
                    this.onVideoWrapperLoaded = function () {
                        return r.locReady ? (r.videoPlayer = f.selectFirstElement(".f-video-player", r.playerContainer), r.videoTag = f.selectFirstElementT("video", r.playerContainer), r.videoPlayer ? (r.restoreSettings(), r.bindEvents(), r.videoMetadata && r.videoMetadata.posterframeUrl && r.videoWrapper.setPosterFrame(r.videoMetadata.posterframeUrl), r.currentVideoFile = r.getVideoFileToPlay(), r.currentVideoFile && (r.commonPlayerImpressionReported || (r.reportEvent(v.PlayerEvents.CommonPlayerImpression), r.commonPlayerImpressionReported = !0), r.setVideoSrc(r.currentVideoFile.url, r.currentVideoFile.mediaType)), r.triggerContainer = f.selectFirstElement("section", r.videoComponent), r.triggerContainer && (r.trigger = f.selectFirstElement(".c-action-trigger", r.triggerContainer)), r.setupControlOptions(), void r.showControlsBasedOnState()) : null) : void setTimeout(function () {
                            r.onVideoWrapperLoaded()
                        }, 50)
                    };
                    this.onBeforeUnload = function () {
                        r.isWindowClosing = !0
                    };
                    this.onVideoWrapperLoadFailed = function () {
                        r.displayErrorMessage({
                            title: r.localizationHelper.getLocalizedValue(p.playerLocKeys.standarderror)
                        })
                    };
                    this.onMouseEvent = function (n) {
                        if (n = f.getEvent(n), "mousemove" === n.type) r.showControlsBasedOnState();
                        else if ("mouseout" === n.type)
                            for (var t = n.toElement || n.relatedTarget; t && t.parentNode && t.parentNode !== window;) {
                                if (t.parentNode === r || t === r) return void f.preventDefault(n);
                                t = t.parentNode
                            }
                    };
                    this.onVideoMetadataLoaded = function () {
                        r.logMessage("onVideoMetadataLoaded()")
                    };
                    this.onVideoLoadedData = function () {
                        r.updateState(d.Ready);
                        r.videoControls && r.videoWrapper && (r.videoControls.setDuration(r.getDuration()), r.startTimeOnDataLoad && r.startTimeOnDataLoad > 0 && r.startTimeOnDataLoad < r.getDuration() && (r.setPlayPosition(r.startTimeOnDataLoad), r.startTimeOnDataLoad = null), r.playOnDataLoad && (r.play(), r.playOnDataLoad = !1))
                    };
                    this.onVideoTimeUpdate = function () {
                        var n, t, i;
                        if (r.videoWrapper) {
                            if (n = r.getCurrentTime(), t = r.getDuration(), isNaN(n) || isNaN(t)) return;
                            (r.videoControls && r.videoControls.setPlayPosition(n), r.closedCaptions && r.closedCaptions.updateCaptions(n), !r.isPaused() && (r.stopwatchPlaying.hasReached(w.PlayerConfig.continueInterval) && (r.reportEvent(v.PlayerEvents.ContentContinue), r.stopwatchBuffering.reset()), r.nextCheckpoint && t > 0 && n >= t * r.nextCheckpoint / 100)) && (i = "played" + r.nextCheckpoint, r.reportEvent(v.PlayerEvents.ContentCheckpoint, {
                                checkpoint: i
                            }), r.setNextCheckpoint())
                        }
                    };
                    this.onVideoCanPlay = function () {
                        r.canPlay = !0;
                        r.videoControls && r.videoControls.updatePlayPauseState()
                    };
                    this.onVideoError = function () {
                        var t, n, i;
                        if (!r.isWindowClosing && r.playerState !== d.Init && r.playerState !== d.Error)
                            if (r.updateState(d.Error), t = r.videoWrapper.getError(), t && t.errorCode) {
                                n = void 0;
                                switch (t.errorCode) {
                                    case o.VideoErrorCodes.MediaErrorAborted:
                                        n = r.localizationHelper.getLocalizedValue(p.playerLocKeys.media_err_aborted);
                                        break;
                                    case o.VideoErrorCodes.MediaErrorNetwork:
                                        n = r.localizationHelper.getLocalizedValue(p.playerLocKeys.media_err_network);
                                        break;
                                    case o.VideoErrorCodes.MediaErrorDecode:
                                        n = r.localizationHelper.getLocalizedValue(p.playerLocKeys.media_err_decode);
                                        break;
                                    case o.VideoErrorCodes.MediaErrorSourceNotSupported:
                                        n = r.localizationHelper.getLocalizedValue(p.playerLocKeys.media_err_src_not_supported);
                                        break;
                                    case o.VideoErrorCodes.AmpEncryptError:
                                        n = r.localizationHelper.getLocalizedValue(p.playerLocKeys.media_err_amp_encrypt);
                                        break;
                                    case o.VideoErrorCodes.AmpPlayerMismatch:
                                        n = r.localizationHelper.getLocalizedValue(p.playerLocKeys.media_err_amp_player_mismatch);
                                        break;
                                    default:
                                        n = r.localizationHelper.getLocalizedValue(p.playerLocKeys.media_err_unknown_error)
                                }
                                n = e.format(r.localizationHelper.getLocalizedValue(p.playerLocKeys.playbackerror), n);
                                i = a.PlayerUtility.formatContentErrorMessage(t.errorCode, n, t.message);
                                r.stopMedia(n, i)
                            } else r.stopMedia()
                    };
                    this.onVideoPlay = function (n) {
                        n && n.target && r.getCurrentTime() && r.reportEvent(v.PlayerEvents.Resume);
                        r.firstByteTimer && window.clearTimeout(r.firstByteTimer);
                        var t = c.Environment.isMobile ? w.PlayerConfig.firstByteTimeoutVideoMobile : w.PlayerConfig.firstByteTimeoutVideoDesktop;
                        t > 0 && (r.firstByteTimer = setTimeout(function () {
                            r.getBufferedDuration() || r.playerState !== d.Buffering || (r.logMessage("Buffering stuck detected"), r.updateState(d.Error), r.stopMedia(r.localizationHelper.getLocalizedValue(p.playerLocKeys.standarderror), a.PlayerUtility.formatContentErrorMessage(o.VideoErrorCodes.BufferingFirstByteTimeout, "Time out waiting for first byte.")))
                        }, t))
                    };
                    this.onVideoPause = function (n) {
                        r.videoWrapper && r.videoWrapper.isSeeking() || r.playerState === d.Ended || (r.updateState(d.Paused), n && n.target && r.reportEvent(v.PlayerEvents.Pause))
                    };
                    this.onVideoSeeking = function () {
                        r.playerState !== d.Ended && r.videoWrapper && r.videoWrapper.isSeeking() && (r.nextCheckpoint = null, null === r.seekFrom && (r.seekFrom = r.getCurrentTime()), r.updateState(d.Seeking))
                    };
                    this.onVideoSeeked = function () {
                        var n = r.getCurrentTime();
                        r.playerState !== d.Ended && r.videoWrapper && !r.videoWrapper.isSeeking() && null !== r.seekFrom && r.seekFrom !== n && (r.setNextCheckpoint(), r.reportEvent(v.PlayerEvents.Seek, {
                            seekFrom: r.seekFrom,
                            seekTo: n
                        }), r.seekFrom = null, r.updateState(r.isPaused() ? d.Paused : d.Playing))
                    };
                    this.onVideoWaiting = function () {
                        r.updateState(d.Buffering)
                    };
                    this.onVideoVolumeChange = function (n) {
                        n && n.target && (r.videoWrapper.isMuted() ? (r.reportEvent(v.PlayerEvents.Mute), r.isVideoMuted = !0) : r.isVideoMuted && (r.reportEvent(v.PlayerEvents.Unmute), r.isVideoMuted = !1));
                        r.videoControls && r.videoControls.updateVolumeState()
                    };
                    this.onVideoPlayerClicked = function () {
                        r.isPlayable && (r.isPaused() ? r.play() : r.pause())
                    };
                    this.onVideoEnded = function () {
                        r.updateState(d.Ended);
                        r.reportEvent(v.PlayerEvents.ContentComplete);
                        r.stopwatchPlaying.reset();
                        c.Environment.useNativeControls || r.stop()
                    };
                    this.onFullscreenChanged = function () {
                        var t = n.getElementInFullScreen(),
                            i = r.getFullscreenContainer();
                        t ? i !== t || r.isInFullscreen || r.onFullscreenEnter() : r.isInFullscreen && r.onFullscreenExit()
                    };
                    this.onIOSFullscreenEnter = function () {
                        r.play();
                        r.onFullscreenEnter()
                    };
                    this.onIOSFullscreenExit = function () {
                        r.onFullscreenExit()
                    };
                    this.onFullscreenError = function () {
                        r.isInFullscreen = !1
                    };
                    t && (this.createComponents(i), this.load(i))
                }
                return n.prototype.createComponents = function (t) {
                    if (this.playerContainer = f.selectFirstElement(n.playerContainerSelector, this.videoComponent), !this.playerContainer) {
                        var i = '<div class="f-core-player" >\n    <video class="f-video-player" preload="metadata"><\/video>\n    <div class="f-video-cc-overlay" aria-hidden="true"><\/div>\n    ' + (t && t.options && t.options.controls ? '<div class="f-video-controls" dir="ltr" aria-hidden="true">' : "") + "\n<\/div>";
                        this.videoComponent.innerHTML = i;
                        this.playerContainer = f.selectFirstElement(n.playerContainerSelector, this.videoComponent)
                    }
                    this.videoTag = f.selectFirstElementT("video", this.playerContainer)
                }, n.prototype.initializeLocalization = function () {
                    this.localizationHelper ? this.onResoucesLoaded() : (this.playerOptions.market || (this.playerOptions.market = this.videoComponent.getAttribute("data-market")), this.localizationHelper = new p.LocalizationHelper(this.playerOptions.market, this.playerOptions.resourcePath), this.localizationHelper.loadResources(this.onResoucesLoaded))
                }, n.prototype.initializeReporting = function () {
                    this.playerOptions && this.playerOptions.reporting && this.playerOptions.reporting.enabled && this.playerOptions.reporting.jsll && this.reporters.push(new y.JsllReporter(this.videoComponent))
                }, n.prototype.load = function (n) {
                    n && n.metadata && n.options && (this.updateState(d.Init), this.hideErrorMessage(), this.videoMetadata = n.metadata, this.playerOptions = n.options, this.videoMetadata && this.videoMetadata.videoFiles && this.videoMetadata.videoFiles.length && (this.playOnDataLoad = this.playerOptions.autoplay, this.startTimeOnDataLoad = this.playerOptions.startTime, this.initializeClosedCaptions(), this.initializeLocalization(), this.initializeReporting(), this.videoTag && (this.videoTag.title = this.videoMetadata.title, this.videoTag.loop = this.playerOptions.loop, this.videoMetadata.posterframeUrl && (this.videoTag.poster = this.videoMetadata.posterframeUrl)), this.videoWrapper = this.getVideoWrapper(), this.playerTechnology = "OnePlayer_" + this.videoWrapper.getWrapperName(), this.videoWrapper.load(this.videoComponent, this.onVideoWrapperLoaded, this.onVideoWrapperLoadFailed, this.onMediaEvent)))
                }, n.prototype.initializeVideoControls = function () {
                    this.videoControlsContainer = f.selectFirstElement(".f-video-controls", this.videoComponent);
                    var n = !c.Environment.useNativeControls && this.playerOptions && this.playerOptions.controls;
                    this.videoControlsContainer && (this.videoControlsContainer.setAttribute("aria-hidden", n ? "false" : "true"), n && (this.videoControls = new i.VideoControls(this.videoControlsContainer, this, this.localizationHelper)))
                }, n.prototype.getQualityOptions = function () {
                    var i, n, f;
                    if (!this.videoMetadata.videoFiles || !this.videoMetadata.videoFiles.length) return null;
                    for (var t = [], e = this.currentVideoFile && this.currentVideoFile.quality, r = 0, u = g; r < u.length; r++) i = u[r], n = this.getVideoFileByQuality(i), n && n.url && (f = {
                        id: this.addIdPrefix(o.MediaQuality[i]),
                        label: this.localizationHelper.getLocalizedValue(p.playerLocKeys["quality_" + o.MediaQuality[i].toLowerCase()]),
                        href: n.url,
                        selected: n.quality === e
                    }, t.push(f));
                    return t.length || t.push({
                        id: this.addIdPrefix("auto"),
                        label: this.localizationHelper.getLocalizedValue(p.playerLocKeys.quality_auto),
                        selected: !0
                    }), t
                }, n.prototype.getClosedCaptionOptions = function () {
                    var t, e, h;
                    if (!(this.videoMetadata && this.videoMetadata.ccFiles && this.videoMetadata.ccFiles.length && this.ccOverlay && this.closedCaptions)) return null;
                    for (var o = u.getCookie(n.cookieCcPreference), r = [], i = !1, f = 0, s = this.videoMetadata.ccFiles; f < s.length; f++) t = s[f], e = t.locale === o, !i && e && (i = !0), h = {
                        id: this.addIdPrefix(t.locale),
                        label: p.ccCultureLocStrings[t.locale],
                        href: t.url,
                        selected: e
                    }, r.push(h);
                    return r.unshift({
                        id: this.addIdPrefix("off"),
                        label: this.localizationHelper.getLocalizedValue(p.playerLocKeys.closecaption_off),
                        selected: !i
                    }), i && this.setCC(this.addIdPrefix(o)), r
                }, n.prototype.getPlaybackRateOptions = function () {
                    if (!this.playerOptions || !this.playerOptions.playbackSpeed || !this.videoWrapper || "amp" === this.videoWrapper.getWrapperName()) return null;
                    for (var r = u.getCookie(n.cookiePlaybackRate) || w.PlayerConfig.defaultPlaybackRate, f = [], i = 0, e = w.PlayerConfig.playbackRates; i < e.length; i++) {
                        var t = e[i],
                            o = t === +r,
                            s = 1 === t ? this.localizationHelper.getLocalizedValue(p.playerLocKeys.playbackspeed_normal) : t + "x",
                            h = {
                                id: this.addIdPrefix("rate" + t),
                                label: s,
                                href: "#",
                                selected: o
                            };
                        f.push(h)
                    }
                    return this.setPlaybackRate(this.addIdPrefix("rate" + r)), f
                }, n.prototype.getShareOptions = function () {
                    var t, n, f;
                    if (this.playerOptions && this.playerOptions.share && (t = b.SharingHelper.getShareOptionsData(this.localizationHelper, this.playerOptions, this.videoMetadata && this.videoMetadata.shareUrl), t && t.length)) {
                        for (var r = [], i = 0, u = t; i < u.length; i++) n = u[i], f = {
                            id: this.addIdPrefix(n.id),
                            label: n.label,
                            href: n.url,
                            glyph: n.glyph,
                            image: n.image
                        }, r.push(f);
                        return r
                    }
                }, n.prototype.setupControlOptions = function () {
                    var n, t, i, r, u;
                    this.videoControls && this.videoMetadata && (n = [], t = this.getQualityOptions(), t && t.length && n.push({
                        category: "f-video-quality",
                        selectable: !0,
                        options: t,
                        label: this.localizationHelper.getLocalizedValue(p.playerLocKeys.quality)
                    }), i = this.getClosedCaptionOptions(), i && i.length && n.push({
                        category: "f-video-captions",
                        selectable: !0,
                        options: i,
                        label: this.localizationHelper.getLocalizedValue(p.playerLocKeys.closecaption)
                    }), r = this.getPlaybackRateOptions(), r && r.length && n.push({
                        category: "f-video-playback-rate",
                        selectable: !0,
                        options: r,
                        label: this.localizationHelper.getLocalizedValue(p.playerLocKeys.playbackspeed)
                    }), u = this.getShareOptions(), u && u.length && n.push({
                        category: "f-video-share",
                        selectable: !1,
                        options: u,
                        label: this.localizationHelper.getLocalizedValue(p.playerLocKeys.sharing_label)
                    }), this.videoControls.setOptions(n))
                }, n.prototype.dispose = function () {
                    this.hideErrorMessage();
                    this.unbindEvents();
                    this.stop();
                    this.updateState(d.Stopped);
                    this.videoTag = null;
                    this.videoWrapper && this.videoWrapper.dispose()
                }, n.prototype.restoreSettings = function () {
                    this.lastVolume = (parseInt(u.getCookie(n.cookieVolume), 10) || 10) / 10;
                    this.setVolume(this.lastVolume);
                    (this.playerOptions.mute || "1" === u.getCookie(n.cookieMute)) && (this.isVideoMuted = !0, this.mute());
                    this.videoControls && this.videoControls.updateVolumeState()
                }, n.prototype.bindEvents = function () {
                    f.addEvents(this.videoComponent, "mousemove mouseout", this.onMouseEvent);
                    f.addEvents(window, "onBeforeUnload", this.onBeforeUnload);
                    this.addFullscreenEvents();
                    c.Environment.useNativeControls || (f.addEvent(this.videoPlayer, f.eventTypes.click, this.onVideoPlayerClicked), f.addEvent(this.ccOverlay, f.eventTypes.click, this.onVideoPlayerClicked))
                }, n.prototype.unbindEvents = function () {
                    f.removeEvents(this.videoComponent, "mousemove mouseout", this.onMouseEvent);
                    f.removeEvents(this.videoPlayer, f.eventTypes[f.eventTypes.click], this.onVideoPlayerClicked);
                    f.removeEvents(this.ccOverlay, f.eventTypes[f.eventTypes.click], this.onVideoPlayerClicked);
                    f.removeEvents(window, "onBeforeUnload", this.onBeforeUnload);
                    this.removeFullscreenEvents()
                }, n.prototype.setVideoSrc = function (n, t) {
                    n && this.videoWrapper && this.videoWrapper.setSource(n, t)
                }, n.prototype.reportEvent = function (n, t) {
                    var r = this.getReport(t),
                        i, u, e;
                    for (this.logMessage("Event reported : " + v.PlayerEvents[n] + " | data : " + JSON.stringify(r)), i = 0, u = this.reporters; i < u.length; i++) e = u[i], e.reportEvent(n, r);
                    f.customEvent(this.videoComponent, v.PlayerEvents[n], {
                        detail: r
                    })
                }, n.prototype.getVideoWrapper = function () {
                    for (var r, i, n = 0, t = this.videoMetadata.videoFiles; n < t.length; n++)
                        if (r = t[n], i = r.mediaType || o.MediaTypes.MP4, i !== o.MediaTypes.MP4 && i !== o.MediaTypes.HLS) return new h.AmpWrapper;
                    return this.playerOptions && "amp" === this.playerOptions.corePlayer ? new h.AmpWrapper : new s.Html5VideoWrapper
                }, n.prototype.startControlPanelTimeout = function () {
                    var t = this;
                    this.controlPanelTimer = window.setTimeout(function () {
                        t.hideControlPanel()
                    }, n.controlPanelTimeout)
                }, n.prototype.hideControlPanel = function () {
                    this.controlPanelTimer && window.clearTimeout(this.controlPanelTimer);
                    c.Environment.useNativeControls ? this.videoTag && this.videoTag.removeAttribute("controls") : this.videoControlsContainer && (f.hasClass(this.videoControlsContainer, n.hideControlsClass) || (f.removeClass(this.videoControlsContainer, n.showControlsClass), f.addClass(this.videoControlsContainer, n.hideControlsClass), this.ccOverlay && (f.removeClass(this.ccOverlay, n.fitControlsClass), this.closedCaptions && this.videoWrapper && this.closedCaptions.updateCaptions(this.getCurrentTime()))));
                    this.videoControls && this.videoControls.prepareToHide()
                }, n.prototype.showControlPanel = function (t) {
                    void 0 === t && (t = !0);
                    this.playerOptions && !this.playerOptions.controls || (this.controlPanelTimer && window.clearTimeout(this.controlPanelTimer), c.Environment.useNativeControls ? this.videoTag && this.videoTag.setAttribute("controls", "true") : this.videoControlsContainer && !f.hasClass(this.videoControlsContainer, n.showControlsClass) && (f.removeClass(this.videoControlsContainer, n.hideControlsClass), f.addClass(this.videoControlsContainer, n.showControlsClass), this.ccOverlay && (f.addClass(this.ccOverlay, n.fitControlsClass), this.closedCaptions && this.videoWrapper && this.closedCaptions.updateCaptions(this.getCurrentTime()))), t && this.startControlPanelTimeout())
                }, n.prototype.stopMedia = function (n, t) {
                    this.logMessage("StopMedia invoked");
                    this.firstByteTimer && (window.clearTimeout(this.firstByteTimer), this.firstByteTimer = null);
                    this.exitFullscreen();
                    n && (this.logMessage(t || n), this.updateState(d.Stopped), this.displayErrorMessage({
                        title: n
                    }), this.reportEvent(v.PlayerEvents.ContentError, {
                        errorType: "content:error",
                        errorDesc: t || n,
                        errorMessage: n
                    }))
                }, n.prototype.setNextCheckpoint = function () {
                    var r = this.getDuration(),
                        n, t, i;
                    if (r)
                        for (n = 0, t = w.PlayerConfig.checkpoints; n < t.length; n++)
                            if (i = t[n], this.getCurrentTime() / r * 100 <= i) return void (this.nextCheckpoint = i);
                    this.nextCheckpoint = null
                }, n.prototype.getCurrentTime = function () {
                    return this.videoWrapper ? this.videoWrapper.getCurrentTime() : 0
                }, n.prototype.getBufferedDuration = function () {
                    var n = 0;
                    try {
                        n = this.videoWrapper && this.videoWrapper.getBufferedDuration()
                    } catch (n) {
                        this.logMessage("Caught exception while getting buffered duration. " + n.message)
                    }
                    return n
                }, n.prototype.stop = function () {
                    this.setPlayPosition(0);
                    this.videoControls && (this.pause(), this.videoControls.setPlayPosition(0));
                    this.closedCaptions && this.closedCaptions.updateCaptions(0)
                }, n.prototype.isPaused = function () {
                    return !!this.videoWrapper && this.videoWrapper.isPaused()
                }, n.prototype.isPlayable = function () {
                    return !!this.videoPlayer && this.canPlay
                }, n.prototype.play = function () {
                    var n = this;
                    this.playerState !== d.Playing && this.playerState !== d.Error && this.playerState !== d.Stopped && (this.videoWrapper && (c.Environment.isIProduct || c.Environment.isAndroidModern ? this.videoWrapper.play() : setTimeout(function () {
                        n.videoWrapper.play()
                    }, 0)), this.videoControls && this.videoControls.updatePlayPauseState())
                }, n.prototype.pause = function () {
                    this.videoWrapper && this.videoWrapper.pause();
                    this.videoControls && this.videoControls.updatePlayPauseState()
                }, n.prototype.setPlayPosition = function (t) {
                    u.isNumber(t) && this.videoWrapper && (t = Math.max(0, Math.min(t, u.isNumber(this.getDuration()) ? this.getDuration() : 0)), Math.abs(t - this.getCurrentTime()) >= n.positionUpdateThreshold && (this.setNextCheckpoint(), this.seekFrom = this.getCurrentTime(), this.videoWrapper.setCurrentTime(t)))
                }, n.prototype.getVolume = function () {
                    return this.videoWrapper && this.videoWrapper.getVolume() || 0
                }, n.prototype.setVolume = function (t, i) {
                    u.isNumber(t) && this.videoWrapper && (t = Math.round(100 * Math.max(0, Math.min(t, 1))) / 100, t !== this.videoWrapper.getVolume() && (this.lastVolume = t, this.videoWrapper.setVolume(t), u.setCookie(n.cookieVolume, Math.ceil(10 * t).toString(), "/"), this.isMuted() && t > 0 && this.unmute(i), this.videoControls && this.videoControls.updateVolumeState()))
                }, n.prototype.getDuration = function () {
                    return this.videoWrapper && this.videoWrapper.getDuration() || this.videoMetadata && this.videoMetadata.duration || 0
                }, n.prototype.isMuted = function () {
                    return this.videoWrapper && this.videoWrapper.isMuted() || this.isVideoMuted
                }, n.prototype.mute = function (t) {
                    this.lastVolume = this.getVolume();
                    this.setMuted(!0);
                    t && u.setCookie(n.cookieMute, "1", "/")
                }, n.prototype.unmute = function (t) {
                    this.setMuted(!1);
                    this.setVolume(this.lastVolume || w.PlayerConfig.defaultVolume);
                    t && u.setCookie(n.cookieMute, "0", "/")
                }, n.prototype.setMuted = function (n) {
                    this.videoWrapper && n !== this.videoWrapper.isMuted() && (n ? this.videoWrapper.mute() : this.videoWrapper.unmute());
                    this.videoControls && this.videoControls.updateVolumeState()
                }, n.isNativeFullscreenEnabled = function () {
                    var n = document;
                    return n.fullscreenEnabled || n.mozFullScreenEnabled || n.webkitFullscreenEnabled || n.webkitSupportsFullscreen || n.msFullscreenEnabled
                }, n.getElementInFullScreen = function () {
                    var n = document;
                    return n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement || n.msFullscreenElement
                }, n.prototype.getFullscreenContainer = function () {
                    return c.Environment.useNativeControls ? this.videoTag : this.playerContainer
                }, n.prototype.setFullscreen = function () {
                    var t, i, r;
                    n.isNativeFullscreenEnabled() && (t = this.getFullscreenContainer(), i = n.getElementInFullScreen(), t && !i && (r = t.requestFullscreen || t.msRequestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullscreen || t.webkitEnterFullScreen, r.call(t)))
                }, n.prototype.exitFullscreen = function () {
                    var i, r, t, u;
                    n.isNativeFullscreenEnabled() && (i = this.getFullscreenContainer(), r = n.getElementInFullScreen(), i && i === r && (t = document, u = t.cancelFullScreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitCancelFullScreen, u.call(t)))
                }, n.prototype.toggleFullscreen = function () {
                    this.isInFullscreen ? this.exitFullscreen() : this.setFullscreen()
                }, n.prototype.addFullscreenEvents = function () {
                    f.addEvents(document, "fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange", this.onFullscreenChanged, !1);
                    f.addEvents(document, "fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError", this.onFullscreenError, !1);
                    this.videoTag && (f.addEvents(this.videoTag, "webkitbeginfullscreen", this.onIOSFullscreenEnter, !1), f.addEvents(this.videoTag, "webkitendfullscreen", this.onIOSFullscreenExit, !1))
                }, n.prototype.removeFullscreenEvents = function () {
                    f.removeEvents(document, "fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange", this.onFullscreenChanged, !1);
                    f.removeEvents(document, "fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError", this.onFullscreenError, !1);
                    this.videoTag && (f.removeEvents(this.videoTag, "webkitbeginfullscreen", this.onIOSFullscreenEnter, !1), f.removeEvents(this.videoTag, "webkitendfullscreen", this.onIOSFullscreenExit, !1))
                }, n.prototype.onFullscreenEnter = function () {
                    this.isInFullscreen = !0;
                    this.reportEvent(v.PlayerEvents.FullScreenEnter)
                }, n.prototype.onFullscreenExit = function () {
                    this.isInFullscreen = !1;
                    this.reportEvent(v.PlayerEvents.FullScreenExit)
                }, n.prototype.initializeClosedCaptions = function () {
                    this.ccOverlay = f.selectFirstElement(".f-video-cc-overlay", this.videoComponent);
                    this.closedCaptions = new r.VideoClosedCaptions(this.ccOverlay)
                }, n.prototype.onOptionChanged = function (n) {
                    switch (n.category) {
                        case "f-video-captions":
                            this.setCC(n.id);
                            break;
                        case "f-video-quality":
                            this.setQuality(n.id);
                            break;
                        case "f-video-share":
                            this.shareVideo(n);
                            break;
                        case "f-video-playback-rate":
                            this.setPlaybackRate(n.id)
                    }
                }, n.prototype.setCC = function (t) {
                    var i, r, e, o;
                    if (this.closedCaptions) {
                        if (t = this.removeIdPrefix(t), i = null, t && this.videoMetadata && this.videoMetadata.ccFiles)
                            for (r = 0, e = this.videoMetadata.ccFiles; r < e.length; r++)
                                if (o = e[r], o.locale === t) {
                                    i = o;
                                    break
                                }
                        this.closedCaptions.setCcLanguage(t, i ? i.url : null);
                        u.setCookie(n.cookieCcPreference, t, "/");
                        f.hasClass(this.videoControlsContainer, n.showControlsClass) && f.addClass(this.ccOverlay, n.fitControlsClass)
                    }
                }, n.prototype.setPlaybackRate = function (t) {
                    if (t = this.removeIdPrefix(t), t && this.videoWrapper) {
                        var i = "rate",
                            r = i && e.startsWith(t, i, !1) ? t.substring(i.length) : t;
                        r && (this.videoWrapper.setPlaybackRate(+r), u.setCookie(n.cookiePlaybackRate, r, "/"))
                    }
                }, n.prototype.setQuality = function (t) {
                    if (t = this.removeIdPrefix(t)) {
                        var r = o.MediaQuality[t],
                            i = this.getVideoFileToPlay(r);
                        i && i.url && (this.currentVideoFile = i, u.setCookie(n.cookieQuality, t, "/"), this.playOnDataLoad = !this.isPaused(), this.startTimeOnDataLoad = this.getCurrentTime(), this.setVideoSrc(i.url, i.mediaType), this.reportEvent(v.PlayerEvents.VideoQualityChanged, {
                            quality: r
                        }))
                    }
                }, n.prototype.shareVideo = function (n) {
                    if (n && n.id) {
                        var t = this.removeIdPrefix(n.id);
                        if (t && n.href) switch (t) {
                            case k.shareTypes.copy:
                                b.SharingHelper.tryCopyTextToClipboard(decodeURIComponent(n.href));
                                break;
                            case k.shareTypes.mail:
                                window.location.href = n.href;
                                break;
                            default:
                                window.open(n.href, "_blank")
                        }
                    }
                }, n.prototype.addIdPrefix = function (n) {
                    var t = this.videoComponent && this.videoComponent.id ? this.videoComponent.id + "-" : null;
                    return t && !e.startsWith(n, t, !1) ? t + n : n
                }, n.prototype.removeIdPrefix = function (n) {
                    var t = this.videoComponent && this.videoComponent.id ? this.videoComponent.id + "-" : null;
                    return t && e.startsWith(n, t, !1) ? n.substring(t.length) : n
                }, n.prototype.showTrigger = function () {
                    this.triggerContainer && this.triggerContainer.setAttribute("aria-hidden", "false")
                }, n.prototype.hideTrigger = function () {
                    this.triggerContainer && this.triggerContainer.setAttribute("aria-hidden", "true")
                }, n.prototype.displayErrorMessage = function (n) {
                    if (n && n.title) {
                        if (this.errorMessageDisplayed = !0, this.errorMessage) f.setText(this.errorMessage.title, n.title || ""), f.setText(this.errorMessage.message, n.message || ""), this.errorMessage.container.setAttribute("aria-hidden", "false");
                        else {
                            this.errorMessage = {};
                            this.errorMessage.container = document.createElement("div");
                            var t = document.createElement("div");
                            this.errorMessage.title = document.createElement("p");
                            this.errorMessage.message = document.createElement("p");
                            this.errorMessage.container.setAttribute("role", "status");
                            this.errorMessage.title.setAttribute("class", "c-heading");
                            this.errorMessage.message.setAttribute("class", "c-paragraph");
                            n.title && f.setText(this.errorMessage.title, n.title);
                            n.message && f.setText(this.errorMessage.message, n.message);
                            this.errorMessage.container.appendChild(t);
                            t.appendChild(this.errorMessage.title);
                            t.appendChild(this.errorMessage.message);
                            this.playerContainer.appendChild(this.errorMessage.container)
                        }
                        this.hideTrigger()
                    }
                }, n.prototype.hideErrorMessage = function () {
                    this.errorMessage && this.errorMessage.container && (this.errorMessage.container.setAttribute("aria-hidden", "true"), this.errorMessageDisplayed = !1)
                }, n.prototype.getDefaultMediaQuality = function () {
                    var i = u.getCookie(n.cookieQuality),
                        t = null;
                    return i && (t = o.MediaQuality[i]), t || (t = c.Environment.isMobile ? w.PlayerConfig.defaultQualityMobile : c.Environment.isTV ? w.PlayerConfig.defaultQualityTV : w.PlayerConfig.defaultQualityDesktop), t
                }, n.prototype.getVideoFileByQuality = function (n) {
                    var u = null,
                        t, i, r;
                    if (n && this.videoMetadata && this.videoMetadata.videoFiles)
                        for (t = 0, i = this.videoMetadata.videoFiles; t < i.length; t++)
                            if (r = i[t], r.quality === n) {
                                u = r;
                                break
                            }
                    return u
                }, n.prototype.getVideoFileByType = function (n) {
                    var u = null,
                        t, i, r;
                    if (n && this.videoMetadata && this.videoMetadata.videoFiles)
                        for (t = 0, i = this.videoMetadata.videoFiles; t < i.length; t++)
                            if (r = i[t], r.mediaType === n) {
                                u = r;
                                break
                            }
                    return u
                }, n.prototype.getVideoFileToPlay = function (n) {
                    var t, r = n || this.getDefaultMediaQuality(),
                        i = !1,
                        u = !1;
                    return this.playerOptions.useHLS && c.Environment.isIProduct && !c.Environment.isWindowsPhone && (t = this.getVideoFileByType(o.MediaTypes.HLS), t && t.url && (i = !0, u = !0)), i || (t = this.getVideoFileByQuality(r), t && t.url && (i = !0)), i || this.currentVideoFile || (t = this.getVideoFileByType(o.MediaTypes.DASH) || this.getVideoFileByType(o.MediaTypes.SMOOTH) || this.getVideoFileByType(o.MediaTypes.MP4), t && t.url && (i = !0)), t
                }, n.prototype.updateState = function (n) {
                    if (n && n !== this.playerState && this.playerState !== d.Error) {
                        this.playerState = n;
                        this.logMessage("Player state updated. New state: " + d[n]);
                        var t = null;
                        switch (this.playerState) {
                            case d.Loading:
                                t = v.PlaybackStatus.VideoOpening;
                                this.stopwatchLoading.start();
                                break;
                            case d.Playing:
                                t = v.PlaybackStatus.VideoPlaying;
                                this.stopwatchPlaying.start();
                                this.stopwatchBuffering.stop();
                                this.stopwatchLoading.stop();
                                this.isBuffering && this.stopwatchBuffering.getValue() && (this.isBuffering = !1, this.reportEvent(v.PlayerEvents.BufferComplete));
                                break;
                            case d.Paused:
                                t = v.PlaybackStatus.VideoPaused;
                                this.stopwatchPlaying.stop();
                                this.stopwatchLoading.stop();
                                break;
                            case d.Buffering:
                                t = v.PlaybackStatus.VideoPlaying;
                                this.stopwatchBuffering.start();
                                this.isBuffering = !0;
                                break;
                            case d.Seeking:
                                this.stopwatchLoading.stop();
                                break;
                            case d.Ended:
                                t = v.PlaybackStatus.VideoPlayCompleted;
                                this.stopwatchPlaying.stop();
                                break;
                            case d.Error:
                                t = v.PlaybackStatus.VideoPlayFailed;
                                this.stopwatchBuffering.reset();
                                this.stopwatchLoading.stop();
                                this.stopwatchPlaying.reset()
                        }
                        this.videoControls && (this.videoControls.updatePlayPauseState(), this.videoControls.updateVolumeState());
                        this.setPlaybackStatus(t);
                        this.showControlsBasedOnState()
                    }
                }, n.prototype.setPlaybackStatus = function (n) {
                    n && this.playbackStatus !== n && (this.playbackStatus = n, this.reportEvent(v.PlayerEvents.PlaybackStatusChanged, {
                        status: n
                    }))
                }, n.prototype.showControlsBasedOnState = function () {
                    switch (this.playerState) {
                        case d.Loading:
                        case d.Init:
                        case d.Error:
                            this.hideControlPanel();
                            break;
                        case d.Ready:
                        case d.Paused:
                        case d.Ended:
                        case d.Stopped:
                            this.showControlPanel(!1);
                            break;
                        default:
                            this.showControlPanel(!0)
                    }
                }, n.prototype.getReport = function (n) {
                    var t = this.getDuration();
                    return {
                        playerInstanceId: this.videoComponent.getAttribute("id"),
                        playerTechnology: this.playerTechnology,
                        playerType: this.videoWrapper.getPlayerTechName(),
                        playbackStatus: v.PlaybackStatus[this.playbackStatus],
                        totalBufferWaitTime: this.stopwatchBuffering.getValue(),
                        bufferCount: this.stopwatchBuffering.getIntervals(),
                        errorType: n && n.errorType,
                        errorDesc: n && n.errorDesc,
                        loadTime: this.stopwatchLoading.getFirstValue(),
                        numPlayed: this.stopwatchLoading.getIntervals(),
                        videoDuration: t,
                        videoElapsedTime: this.getCurrentTime(),
                        seekFrom: n && n.seekFrom,
                        seekTo: n && n.seekTo,
                        videoLength: 1e3 * t,
                        videoSize: u.getDimensions(this.playerContainer),
                        totalTimePlaying: this.stopwatchPlaying.getTotalValue(),
                        currentInterval: this.stopwatchPlaying.getValue(),
                        continueInterval: w.PlayerConfig.continueInterval,
                        checkpoint: n && n.checkpoint,
                        currentVideoFile: this.currentVideoFile,
                        videoMetadata: this.videoMetadata,
                        playerOptions: this.playerOptions
                    }
                }, n.prototype.logMessage = function (n) {
                    this.playerOptions && this.playerOptions.debug && n && a.PlayerUtility.logConsoleMessage(n, "Core-Player : " + this.videoComponent.id)
                }, n.playerContainerSelector = ".f-core-player", n.showControlsClass = "f-slidein", n.hideControlsClass = "f-slideout", n.fitControlsClass = "f-overlay-slidein", n.cookieVolume = "vidvol", n.cookieMute = "vidmut", n.cookieQuality = "vidqlt", n.cookieCcPreference = "vidccpref", n.cookiePlaybackRate = "vidrate", n.positionUpdateThreshold = .1, n.controlPanelTimeout = 3500, n
            }();
        t.CorePlayer = nt
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t];
    r = function (n, t) {
        "use strict";
        var i = function () {
            function n() { }
            return n.userAgent = navigator.userAgent, n.isWindowsPhone = !!n.userAgent.match(/Windows Phone/i), n.isSilk = !!n.userAgent.match(/Silk/i), n.hasSilkVersion = /\bSilk\/(\d+)\.(\d+)/.test(n.userAgent), n.silkMajor = n.hasSilkVersion ? Number(RegExp.$1) : 0, n.silkMinor = n.hasSilkVersion ? Number(RegExp.$2) : 0, n.isSilkModern = n.silkMajor > 3 || n.silkMajor >= 3 && n.silkMinor >= 5, n.isAndroid = !n.isWindowsPhone && (n.isSilk || !!n.userAgent.match(/Android/i)), n.androidVersion = /Android (\d+\.\d+)/i.test(n.userAgent) ? Number(RegExp.$1) : n.hasSilkVersion ? n.isSilkModern ? 4 : 1 : 0, n.isIPhone = !!n.userAgent.match(/iPhone/i) || !!n.userAgent.match(/iPod/i), n.isIPad = !!n.userAgent.match(/iPad/i), n.isIProduct = n.isIPad || n.isIPhone, n.isBlackBerry = !!n.userAgent.match(/BlackBerry/i), n.isHtcWindowsPhone = n.isWindowsPhone && !!n.userAgent.match(/HTC/i), n.windowsVersion = /Windows NT(\s)*(\d+\.\d+)/.test(n.userAgent) ? parseFloat(RegExp.$2) : -1, n.ieVersion = /MSIE (\d+\.\d+)/.test(n.userAgent) ? Number(RegExp.$1) : /Trident.*rv:(\d+\.\d+)/.test(n.userAgent) ? Number(RegExp.$1) : 0, n.isIEMobileModern = /\bIEMobile\/(\d+\.\d+)/.test(n.userAgent) ? Number(RegExp.$1) >= 10 : !!/Windows Phone (\d+\.\d+)/i.test(n.userAgent) && Number(RegExp.$1) >= 10, n.isAndroidModern = n.isAndroid && (n.androidVersion >= 4 || n.isSilkModern), n.isMobile = n.isIProduct || n.isAndroid || n.isBlackBerry || n.isWindowsPhone, n.useNativeControls = n.isIProduct || n.isAndroid || n.isWindowsPhone, n.isWebkit = !!n.userAgent.match(/Webkit/i), n.isFirefox = !!n.userAgent.match(/Firefox/i), n.isTV = !!n.userAgent.match(/.*SMART\-TV.*Safari\/(535\.20\+|537\.42)/), n.isWindowsRT = /^.*?\bWindows\b.*?\bARM\b.*?$/m.test(n.userAgent), n
        }();
        t.Environment = i
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(8), i(12), i(11), i(9), i(15)];
    r = function (n, t, i, r, u, f, e) {
        "use strict";
        var o = function () {
            function n(t, u, e) {
                var o = this;
                if (this.videoControls = t, this.localizationHelper = e, this.onPlayPauseEvents = function (t) {
                    "click" === t.type ? o.videoPlayer && (o.videoPlayer.isPaused() ? o.play() : o.pause()) : "mouseover" === t.type ? o.playTooltip && o.playTooltip.setAttribute(n.ariaHidden, "false") : "mouseout" === t.type && o.playTooltip && o.playTooltip.setAttribute(n.ariaHidden, "true")
                }, this.onVolumeEvents = function (n) {
                    "click" === n.type ? f.getEventTargetOrSrcElement(n) === o.volumeButton && o.setMuted(!o.videoPlayer.isMuted()) : "mouseover" === n.type ? o.showVolumeContainer() : "mouseout" === n.type && o.hideVolumeContainer()
                }, this.onFullScreenEvents = function (t) {
                    "click" === t.type ? o.videoPlayer && o.videoPlayer.toggleFullscreen() : "mouseover" === t.type ? o.fullScreenTooltip && o.fullScreenTooltip.setAttribute(n.ariaHidden, "false") : "mouseout" === t.type && o.fullScreenTooltip && o.fullScreenTooltip.setAttribute(n.ariaHidden, "true")
                }, this.toggleOptionsDialog = function () {
                    o.optionsContainer && (o.odDimensions = f.getClientRect(o.odParent), "false" === o.optionsContainer.getAttribute(n.ariaHidden) ? o.hideOptionsContainer() : o.showOptionsContainer())
                }, this.hideOptionsContainer = function () {
                    o.optionsContainer && o.optionsContainer.setAttribute(n.ariaHidden, "true")
                }, this.onOptionsDialogClick = function (n) {
                    var t, i, r, c, u, e, h, l;
                    if (n = f.getEvent(n), t = f.getEventTargetOrSrcElement(n), i = t.getAttribute("data-video-options"), "back" === i) return o.showOptionsContainer(), void f.preventDefault(n);
                    if (i) return o.optionsContainer && o.odParent && (r = f.selectFirstElement("ul[data-video-sub-options=" + i + "]", o.optionsContainer), f.css(r, "display", "block"), c = o.calcHeight(r), f.css(o.optionsContainer, "height", c + "px"), f.css(o.odParent, "left", "-160px"), o.odSubActive = r), void f.preventDefault(n);
                    if (o.odSubActive) {
                        if (f.preventDefault(n), u = t.getAttribute("data-video-selectable"), !u && t.firstElementChild && (t = t.firstElementChild, u = t.getAttribute("data-video-selectable")), u) {
                            for (e = 0, h = f.selectElements("a", o.odSubActive); e < h.length; e++) l = h[e], f.removeClass(l, "glyph-check-mark");
                            f.addClasses(t, ["c-glyph", "glyph-check-mark"])
                        }
                        var s = t.parentElement,
                            a = s.id || s.parentElement && s.parentElement.id,
                            v = t.getAttribute("href") || s.getAttribute("href");
                        o.videoPlayer && o.videoPlayer.onOptionChanged({
                            category: o.odSubActive.getAttribute("data-video-sub-options"),
                            id: a,
                            href: v
                        })
                    }
                    o.hideOptionsContainer()
                }, t && u) {
                    if (this.videoPlayer = u, this.initializeLocalization(), this.initializeComponents(), !(this.playButton && this.playTooltip && this.fullScreenButton && this.fullScreenTooltip && this.progressSliderElement && this.volumeButton && this.volumeContainer && this.volumeSliderElement && this.timeCurrent && this.timeDuration && this.optionsButton && this.optionsContainer)) return null;
                    this.updatePlayPauseState();
                    this.optionsDialogInit();
                    f.addEvents(window, "resize scroll", this.hideOptionsContainer);
                    f.addEvents(this.playButton, "click mouseover mouseout", this.onPlayPauseEvents);
                    f.addEvents(this.fullScreenButton, "click mouseover mouseout", this.onFullScreenEvents);
                    f.addEvents([this.volumeButton, this.volumeContainer], "click mouseover mouseout", this.onVolumeEvents);
                    f.addEvent(this.optionsButton, f.eventTypes.click, this.toggleOptionsDialog);
                    i.ComponentFactory.create([{
                        component: r.Slider,
                        eventToBind: "DOMContentLoaded",
                        elements: [this.progressSliderElement, this.volumeSliderElement],
                        callback: function (n) {
                            n && n.length && 2 === n.length && (o.progressSlider = n[0], o.volumeSlider = n[1], o.volumeSlider.resetSlider(0, 100, 1, 100), o.progressSlider.subscribe({
                                onValueChanged: function (n) {
                                    return o.onProgressChanged(n)
                                }
                            }), o.volumeSlider.subscribe({
                                onValueChanged: function (n) {
                                    return o.onVolumeChanged(n)
                                }
                            }))
                        }
                    }])
                }
            }
            return n.prototype.initializeComponents = function () {
                var r;
                if (this.videoControls) {
                    var u = this.localizationHelper.getLocalizedValue(e.playerLocKeys.seek),
                        o = this.localizationHelper.getLocalizedValue(e.playerLocKeys.more_caption),
                        i = this.localizationHelper.getLocalizedValue(e.playerLocKeys.volume),
                        t = this.localizationHelper.getLocalizedValue(e.playerLocKeys.expand);
                    this.videoControls.children.length || (r = "<button type='button' class='f-play-pause c-glyph glyph-play' aria-label='" + this.locPlay + "'>\n    <span aria-hidden='true'>" + this.locPlay + "<\/span>\n<\/button>\n<span class='f-time'>\n    <span class='f-current-time'>00:00<\/span>\n    /\n    <span class='f-duration'>00:00<\/span>\n<\/span>\n<div class='c-slider f-progress'>\n    <input type='range' class='f-seek-bar' aria-label='" + u + "' value='0' min='0'>\n<\/div>\n<button type='button' class='f-options c-glyph glyph-more' aria-label='" + o + "'><\/button>\n<div class='f-options-dialog' aria-hidden='true'><\/div>\n<button type='button' class='f-volume-button c-glyph glyph-volume' aria-label='" + i + "'><\/button>\n<div class='f-volume-slider' aria-hidden='true'>\n    <div class='c-slider f-vertical'>\n        <input type='range' class='f-volume-bar f-vertical' aria-label='" + i + "' min='0' max='100' step='1' value='100'>\n    <\/div>\n<\/div>\n<button type='button' class='f-full-screen c-glyph glyph-full-screen' aria-label='" + t + "'>\n    <span aria-hidden='true'>" + t + "<\/span>\n<\/button>", this.videoControls.innerHTML = r);
                    this.playButton = f.selectFirstElementT(".f-play-pause", this.videoControls);
                    this.playButton.setAttribute(n.ariaLabel, this.locPlay);
                    this.playTooltip = f.selectFirstElement("span", this.playButton);
                    f.setText(this.playTooltip, this.locPlay);
                    f.selectFirstElement(".f-time", this.videoControls);
                    this.timeCurrent = f.selectFirstElement(".f-current-time", this.videoControls);
                    this.timeDuration = f.selectFirstElement(".f-duration", this.videoControls);
                    this.progressSliderElement = f.selectFirstElement(".c-slider.f-progress", this.videoControls);
                    this.optionsButton = f.selectFirstElementT(".f-options", this.videoControls);
                    this.optionsButton.setAttribute(n.ariaLabel, this.localizationHelper.getLocalizedValue(e.playerLocKeys.more_caption));
                    this.optionsContainer = f.selectFirstElement(".f-options-dialog", this.videoControls);
                    this.volumeButton = f.selectFirstElementT(".f-volume-button", this.videoControls);
                    this.volumeButton.setAttribute(n.ariaLabel, this.localizationHelper.getLocalizedValue(e.playerLocKeys.volume));
                    this.volumeContainer = f.selectFirstElement(".f-volume-slider", this.videoControls);
                    this.volumeSliderElement = f.selectFirstElement(".c-slider", this.volumeContainer);
                    this.fullScreenButton = f.selectFirstElementT(".f-full-screen", this.videoControls);
                    this.fullScreenButton.setAttribute(n.ariaLabel, t);
                    this.fullScreenTooltip = f.selectFirstElement("span", this.fullScreenButton);
                    f.setText(this.fullScreenTooltip, t)
                }
            }, n.prototype.initializeLocalization = function () {
                this.locPlay = this.localizationHelper.getLocalizedValue(e.playerLocKeys.play);
                this.locPause = this.localizationHelper.getLocalizedValue(e.playerLocKeys.pause)
            }, n.prototype.setDuration = function (n) {
                u.isNumber(n) && (this.progressSlider && this.progressSlider.resetSlider(0, n), this.timeDuration && (this.timeDuration.innerHTML = u.toElapsedTimeString(n)))
            }, n.prototype.setPlayPosition = function (n) {
                u.isNumber(n) && this.progressSlider && this.progressSlider.setValue(n)
            }, n.prototype.setVolume = function (n) {
                u.isNumber(n) && this.videoPlayer && this.videoPlayer.setVolume(n, !0)
            }, n.prototype.setMuted = function (n) {
                this.videoPlayer && (n ? this.videoPlayer.mute(!0) : this.videoPlayer.unmute(!0))
            }, n.prototype.updateVolumeState = function () {
                if (this.updateMuteGlyph(), this.videoPlayer && this.volumeSlider) {
                    var n = this.videoPlayer.getVolume();
                    this.volumeSlider.setValue(Math.round(100 * n))
                }
            }, n.prototype.updateMuteGlyph = function () {
                if (this.videoPlayer && this.volumeButton) {
                    f.removeClasses(this.volumeButton, ["glyph-volume", "glyph-mute"]);
                    var n = this.videoPlayer.isMuted() || 0 === this.videoPlayer.getVolume();
                    f.addClass(this.volumeButton, n ? "glyph-mute" : "glyph-volume")
                }
            }, n.prototype.prepareToHide = function () {
                this.hideOptionsContainer();
                this.hideVolumeContainer()
            }, n.prototype.onProgressChanged = function (n) {
                if (!n) return null;
                this.videoPlayer && n.userInitiated && this.videoPlayer.setPlayPosition(n.value);
                var t = u.toElapsedTimeString(n.value);
                return this.timeCurrent && (this.timeCurrent.innerHTML = t), t
            }, n.prototype.onVolumeChanged = function (n) {
                if (!n) return null;
                var t = Math.round(n.value);
                return this.setVolume(t / 100), t.toString()
            }, n.prototype.play = function () {
                this.videoPlayer && this.videoPlayer.play()
            }, n.prototype.pause = function () {
                this.videoPlayer && this.videoPlayer.pause()
            }, n.prototype.updatePlayPauseState = function () {
                this.videoPlayer && this.playButton && (this.videoPlayer.isPlayable() ? (this.playButton.removeAttribute("disabled"), this.videoPlayer.isPaused() ? (this.playTooltip && (this.playTooltip.innerHTML = this.locPlay), f.removeClass(this.playButton, "glyph-pause"), f.addClass(this.playButton, "glyph-play"), this.playButton.setAttribute(n.ariaLabel, this.locPlay)) : (this.playTooltip && (this.playTooltip.innerHTML = this.locPause), f.removeClass(this.playButton, "glyph-play"), f.addClass(this.playButton, "glyph-pause"), this.playButton.setAttribute(n.ariaLabel, this.locPause), this.prepareToHide())) : (this.playTooltip && (this.playTooltip.innerHTML = this.locPlay), f.removeClass(this.playButton, "glyph-pause"), f.addClass(this.playButton, "glyph-play"), this.playButton.setAttribute(n.ariaLabel, this.locPlay), this.playButton.setAttribute("disabled", "disabled")))
            }, n.prototype.showVolumeContainer = function () {
                this.volumeContainer && (this.volumeContainer.setAttribute(n.ariaHidden, "false"), this.onlyOneDialog(this.volumeContainer))
            }, n.prototype.hideVolumeContainer = function () {
                this.volumeContainer && this.volumeContainer.setAttribute(n.ariaHidden, "true")
            }, n.prototype.optionsDialogInit = function () {
                this.optionsContainer && (this.odParent = f.selectFirstElement("ul", this.optionsContainer), this.odDimensions = f.getClientRect(this.odParent), f.addEvent(this.odParent, f.eventTypes.click, this.onOptionsDialogClick))
            }, n.prototype.disposeOptionsDialog = function () {
                this.optionsContainer && (this.odParent = null, this.odDimensions = null, f.removeEvents(this.odParent, "click", this.onOptionsDialogClick), f.removeInnerHtml(this.optionsContainer))
            }, n.prototype.showOptionsContainer = function () {
                this.optionsContainer && this.odParent && (this.optionsContainer.setAttribute(n.ariaHidden, "false"), f.css(this.optionsContainer, "height", this.odDimensions.height + "px"), f.css(this.optionsContainer, "overflowY", "hidden"), f.css(this.odParent, "left", "0"), this.odClearSubActive(), this.onlyOneDialog(this.optionsContainer))
            }, n.prototype.onlyOneDialog = function (t) {
                this.optionsContainer && this.volumeContainer && "false" === this.optionsContainer.getAttribute(n.ariaHidden) && "false" === this.volumeContainer.getAttribute(n.ariaHidden) && (t === this.optionsContainer ? this.hideVolumeContainer() : this.hideOptionsContainer())
            }, n.prototype.calcHeight = function (n) {
                if (!n || !this.videoControls) return 0;
                var t = f.getClientRect(n).height,
                    r = f.getClientRect(this.videoControls.parentElement),
                    u = f.getClientRect(this.videoControls),
                    i = r.height - u.height;
                return t > i ? (f.css(this.optionsContainer, "overflowY", "scroll"), t = i) : f.css(this.optionsContainer, "overflowY", "hidden"), t
            }, n.prototype.odClearSubActive = function () {
                this.odSubActive && (f.css(this.odSubActive, "display", "none"), this.odSubActive = null)
            }, n.prototype.setOptions = function (n) {
                var i, h;
                if (this.optionsContainer && n && n.length) {
                    for (var e = "", r = 0, o = n; r < o.length; r++) {
                        for (var t = o[r], u = "", f = 0, s = t.options; f < s.length; f++) i = s[f], u += "<li id='" + i.id + "' " + (i.selected ? "aria-selected='true'" : "") + ">\n    <a role='button' \n        class='c-action-trigger " + (i.glyph || t.selectable ? "c-glyph" : "") + " " + (i.glyph || "") + " " + (i.selected ? "glyph-check-mark" : "") + "' \n        href='" + (i.href || "#") + "'\n        " + (t.selectable ? "data-video-selectable='true'" : "") + ">\n            " + (i.image ? "<img src='" + i.image + "' alt='" + (i.imageAlt || "") + "' class='c-image'/>" : "") + "\n            " + i.label + "\n    <\/a>\n<\/li>";
                        e += "<li>\n    <a href='" + (t.href || "#") + "' class='c-hyperlink' " + (t.options && t.options.length && t.category ? "data-video-options='" + t.category + "'" : "") + ">" + t.label + "<\/a>\n    " + (u ? "<ul class='c-list f-bare' data-video-sub-options='" + t.category + "'>\n        <li>\n            <a role='button' class='c-action-trigger c-glyph glyph-chevron-left' href='#' data-video-options='back'>" + t.label + "<\/a>\n        <\/li>\n        " + u + "\n    <\/ul>" : "") + "\n<\/li>"
                    }
                    h = "<ul class='c-list f-bare'>\n    " + e + "\n<\/ul>";
                    this.disposeOptionsDialog();
                    this.optionsContainer.innerHTML = h;
                    this.optionsDialogInit()
                }
            }, n.selector = ".f-video-controls", n.ariaHidden = "aria-hidden", n.ariaLabel = "aria-label", n
        }();
        t.VideoControls = o
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(9), i(11)];
    r = function (n, t, i, r) {
        "use strict";
        var u = function () {
            function n() { }
            return n.create = function (t) {
                for (var i, r = 0, u = t; r < u.length; r++) {
                    if (i = u[r], !i.c && !i.component) throw "factoryInput should has either component or c to tell the factory what component to create.Eg.ComponentFactory.create([{ c: Carousel] or ComponentFactory.create([component: Carousel]))";
                    n.createComponent(i.component || i.c, i)
                }
            }, n.createComponent = function (t, r) {
                if (t) {
                    var o = r && r.eventToBind ? r.eventToBind : "",
                        f = r && r.selector ? r.selector : t.selector,
                        s = r && r.context ? r.context : null,
                        u = [],
                        e = function (n, f, e) {
                            var a, h, c, o, l;
                            for (a = r.elements ? r.elements : f ? i.selectElementsT(f, s) : [document.body], h = 0, c = a; h < c.length; h++) o = c[h], (o.mwfInstances || (o.mwfInstances = {}), o.mwfInstances[n]) ? u.push(o.mwfInstances[n]) : (l = new t(o, e), o.mwfInstances[n] = l, u.push(l))
                        };
                    switch (o) {
                        case "DOMContentLoaded":
                            if (!n.onDomReadyHappened) {
                                n.domReadyFunctions.push(function () {
                                    return n.callBindFunction(t, f, e, r, u)
                                });
                                break
                            }
                            n.callBindFunction(t, f, e, r, u);
                            break;
                        case "load":
                        default:
                            if (!n.onDeferredHappened) {
                                n.deferredFunctions.push(function () {
                                    return n.callBindFunction(t, f, e, r, u)
                                });
                                break
                            }
                            n.callBindFunction(t, f, e, r, u)
                    }
                }
            }, n.callBindFunction = function (t, i, u, f, e) {
                void 0 === f && (f = null);
                var o = n.getTypeName(t),
                    s = o || i || "";
                r.createPerfMarker(s + "_Begin");
                u(o, i, {
                    mwfClass: o
                });
                r.createPerfMarker(s + "_End");
                f && f.callback && f.callback(e)
            }, n.getTypeName = function (t) {
                if (t.typeName) return t.typeName;
                if (t.name) return t.name;
                var i = n.typeNameRegEx.exec(t.toString());
                if (i && i.length > 1) return i[1]
            }, n.enumerateComponents = function (n, t) {
                var i, r, u;
                if (n && t) {
                    i = n.mwfInstances;
                    for (r in i)
                        if (i.hasOwnProperty(r) && (u = i[r], u && !t(r, u))) break
                }
            }, n.typeNameRegEx = /function\s+(\S+)\s*\(/, n.onLoadTimeoutMs = 6e3, n.onDeferredHappened = !1, n.deferredFunctions = [], n.onDomReadyHappened = !1, n.domReadyFunctions = [], n
        }();
        t.ComponentFactory = u,
            function () {
                i.onDeferred(function () {
                    var n, t, r, f;
                    if (u.onDeferredHappened = !0, n = u.deferredFunctions, !n || n.length > 0)
                        for (t = 0, r = n; t < r.length; t++) f = r[t], "function" == typeof f && i.SafeBrowserApis.requestAnimationFrame.call(window, f);
                    u.deferredFunctions = null
                }, u.onLoadTimeoutMs);
                i.documentReady(function () {
                    var n, t, r, f;
                    if (u.onDomReadyHappened = !0, n = u.domReadyFunctions, !n || n.length > 0)
                        for (t = 0, r = n; t < r.length; t++) f = r[t], "function" == typeof f && i.SafeBrowserApis.requestAnimationFrame.call(window, f);
                    u.domReadyFunctions = null
                }, u.onLoadTimeoutMs)
            }()
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(10)];
    r = function (n, t, i) {
        "use strict";

        function f(n, t, i, f) {
            var e, o, s;
            for (void 0 === f && (f = !1), e = 0, o = u(n); e < o.length; e++) s = o[e], v(s, i, f, r[t])
        }

        function g(n, t, r, f) {
            var e, o, h;
            if (void 0 === f && (f = !1), !i.isNullOrWhiteSpace(t))
                for (e = 0, o = u(n); e < o.length; e++)
                    for (var l = o[e], s = 0, c = t.split(/\s+/); s < c.length; s++) h = c[s], i.isNullOrWhiteSpace(h) || v(l, r, f, h)
        }

        function nt(n, t, r, f) {
            var e, o, h;
            for (void 0 === f && (f = !1), e = 0, o = u(n); e < o.length; e++)
                for (var l = o[e], s = 0, c = u(t); s < c.length; s++) h = c[s], i.isNullOrWhiteSpace(h) || d(l, r, f, h)
        }

        function tt(n) {
            n = a(n);
            n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
        }

        function it(n, t, i, r) {
            void 0 === r && (r = 150);
            var e, u = 0,
                o = function (n) {
                    var t = Date.now();
                    clearTimeout(e);
                    u && t < u + r ? e = setTimeout(function () {
                        u = t;
                        i(n)
                    }, r - (t - u)) : (u = t, i(n))
                };
            return f(n, t, o), o
        }

        function rt(n, t, r, f, e) {
            function y(n) {
                var i, t = 0;
                return function (r) {
                    var u = Date.now();
                    clearTimeout(i);
                    t && u < t + e ? i = setTimeout(function () {
                        t = u;
                        n(r)
                    }, e - (u - t)) : (t = u, n(r))
                }
            }
            var o, s, c, a;
            if (void 0 === f && (f = !1), void 0 === e && (e = 150), !i.isNullOrWhiteSpace(t))
                for (o = 0, s = u(n); o < s.length; o++)
                    for (var p = s[o], h = 0, l = t.split(/\s+/); h < l.length; h++) c = l[h], i.isNullOrWhiteSpace(c) || (a = y(r), v(p, a, f, c))
        }

        function ut(n, t, i, r) {
            void 0 === r && (r = 150);
            var u, e = function (n) {
                window.clearTimeout(u);
                u = setTimeout(function () {
                    i(n)
                }, r)
            };
            return f(n, t, e), e
        }

        function ft(n, t) {
            if ((void 0 === t && (t = 5e3), "complete" === document.readyState) || !document.attachEvent && "interactive" === document.readyState) return void n.call(null);
            var o, i, u, e = function () {
                clearTimeout(o);
                i && h(document, r.DOMContentLoaded, i);
                u && h(document, r.onreadystatechange, u);
                y.requestAnimationFrame.call(window, n)
            };
            return o = setTimeout(function () {
                e("timedout")
            }, t), document.addEventListener ? (i = function () {
                e("domcontentloaded")
            }, void f(document, r.DOMContentLoaded, i, !1)) : void (document.attachEvent && (u = function () {
                "complete" === document.readyState && e("readystatecomplete")
            }, f(document, r.onreadystatechange, u, !1)))
        }

        function et(n, t) {
            void 0 === t && (t = 5e3);
            var i, u = setTimeout(function () {
                clearTimeout(u);
                h(window, r.load, i);
                n.call(null)
            }, t);
            i = function () {
                clearTimeout(u);
                y.requestAnimationFrame.call(window, n)
            };
            "complete" === document.readyState ? (clearTimeout(u), n.call(null)) : f(window, r.load, i)
        }

        function p(n, t) {
            !n || i.isNullOrWhiteSpace(t) || b(n, t) || (n.classList ? n.classList.add(t) : n.className = (n.className + " " + t).trim())
        }

        function w(n, t) {
            var r, e, f;
            if (n && !i.isNullOrWhiteSpace(t))
                for (r = 0, e = u(n); r < e.length; r++) f = e[r], f.className && (f.className = (" " + f.className + " ").replace(" " + t.trim() + " ", " ").trim())
        }

        function ot(n, t) {
            var i, r, u;
            if (t)
                for (i = 0, r = t; i < r.length; i++) u = r[i], w(n, u)
        }

        function st(n, t) {
            var i, r, u;
            if (t)
                for (i = 0, r = t; i < r.length; i++) u = r[i], p(n, u)
        }

        function b(n, t) {
            return !(!n || i.isNullOrWhiteSpace(t) || i.isNullOrWhiteSpace(n.className)) && (" " + n.className + " ").indexOf(" " + t.trim() + " ") > -1
        }

        function ht(n) {
            return n ? n.parentElement.removeChild(n) : n
        }

        function ct(n, t) {
            return o(n, t)
        }

        function lt(n, t) {
            var i = o(n, t);
            return i && i.length ? i[0] : null
        }

        function o(n, t) {
            var r, u;
            if (i.isNullOrWhiteSpace(n)) return [];
            if (r = t || document, /^[\#.]?[\w-]+$/.test(n)) {
                switch (n[0]) {
                    case ".":
                        return s(r.getElementsByClassName ? r.getElementsByClassName(n.slice(1)) : r.querySelectorAll(n));
                    case "#":
                        return u = r.querySelector(n), u ? [u] : []
                }
                return s(r.getElementsByTagName(n))
            }
            return s(r.querySelectorAll(n))
        }

        function at(n, t) {
            var i = o(n, t);
            return i && i.length ? i[0] : null
        }

        function vt(n, t) {
            var u, f, o = t || document,
                i, r, e;
            for (u = n.split(","), i = 0, r = u; i < r.length; i++) e = r[i], f += this.selectElements(e, o);
            return f
        }

        function s(n) {
            if (!n) return [];
            for (var i = [], t = 0; t < n.length; t++) i.push(n[t]);
            return i
        }

        function yt(n) {
            for (void 0 === n && (n = document.documentElement); null !== n;) {
                var t = n.getAttribute("dir");
                if (t) return "rtl" === t ? c.right : c.left;
                n = n.parentElement
            }
            return c.left
        }

        function l(n) {
            var i, t, r;
            if (n) {
                i = n.getBoundingClientRect();
                t = {};
                for (r in i) t[r] = i[r];
                return "undefined" == typeof t.width && (t.width = n.offsetWidth), "undefined" == typeof t.height && (t.height = n.offsetHeight), t
            }
        }

        function pt(n) {
            if (n) return {
                width: parseFloat(l(n).width) + parseFloat(e(n, "margin-left")) + parseFloat(e(n, "margin-right")),
                height: parseFloat(l(n).height) + parseFloat(e(n, "margin-top")) + parseFloat(e(n, "margin-bottom"))
            }
        }

        function e(n, t, r) {
            return n ? r || "" === r ? void (n.style[t] = r) : (r = n.style[t], i.isNullOrWhiteSpace(r) && (r = getComputedStyle(n), r = r[t]), r) : null
        }

        function h(n, t, i, f) {
            var e, o, s;
            if (n && t && i)
                for (e = 0, o = u(n); e < o.length; e++) s = o[e], d(s, i, f, r[t])
        }

        function k(n) {
            return Array.isArray ? Array.isArray(n) : "[object Array]" === {}.toString.call(n)
        }

        function u(n) {
            return k(n) ? n : [n]
        }

        function wt(n, t) {
            if (null == n || null == t) return null;
            for (var i = t.parentNode; null != i;) {
                if (i === n) return !0;
                i = i.parentNode
            }
            return !1
        }

        function bt(n) {
            return n ? n.innerText || n.textContent || "" : ""
        }

        function kt(n, t) {
            n && null !== t && (n.textContent ? n.textContent = t : n.innerHTML = t)
        }

        function dt(n) {
            n && (n.innerHTML = "")
        }

        function gt(n) {
            return n = a(n), n.target || n.srcElement
        }

        function a(n) {
            return n || window.event
        }

        function v(n, t, i, r) {
            void 0 === i && (i = !1);
            n && (window.addEventListener ? n.addEventListener(r, t, i) : n.attachEvent("on" + r, t))
        }

        function d(n, t, i, r) {
            void 0 === i && (i = !1);
            n && (window.removeEventListener ? n.removeEventListener(r, t, i) : n.detachEvent("on" + r, t))
        }

        function ni(n, t, i) {
            if (void 0 === i && (i = {}), !n || !t) return null;
            var f = "string" == typeof t ? t : r[t],
                u = null;
            return i.bubbles = "undefined" == typeof i.bubbles || i.bubbles, i.cancelable = "undefined" == typeof i.cancelable || i.cancelable, window.CustomEvent && "function" == typeof window.CustomEvent ? u = new CustomEvent(f, i) : document.createEvent ? (u = document.createEvent("CustomEvent"), u.initCustomEvent(f, i.bubbles, i.cancelable, i.detail)) : (u = document.createEventObject(), n.fireEvent("on" + f, u)), n.dispatchEvent(u), u
        }

        function ti(n) {
            n.stopPropagation ? n.stopPropagation() : n.returnValue = !1
        }

        function ii(n) {
            return void 0 === n && (n = window), n.scrollY || n.pageYOffset || ("CSS1Compat" === n.document.compatMode ? n.document.documentElement.scrollTop : n.document.body.scrollTop)
        }

        function ri(n) {
            if (!n) return window.document.documentElement;
            for (var i = n.ownerDocument.documentElement, t = n.offsetParent; t && "static" == e(t, "position");) t = t.offsetParent;
            return t || i
        }

        function ui(n, t) {
            if (n && t) {
                var i = t.clientHeight,
                    r = t.scrollHeight;
                r > i && (t.scrollTop = Math.min(n.offsetTop - t.firstElementChild.offsetTop, r - i))
            }
        }

        function fi(n) {
            return "undefined" == typeof n.complete || "undefined" == typeof n.naturalHeight || n && n.complete && n.naturalHeight > 0
        }

        function ei(n) {
            var i = n.touches && n.touches.length ? n.touches : [n],
                t = n.changedTouches && n.changedTouches[0] || i[0];
            return {
                x: t.clientX,
                y: t.clientY
            }
        }

        function oi(n, t) {
            for (var i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector; n && !i.call(n, t);) n = n.parentElement;
            return n
        }
        var y, c, r;
        ! function (n) {
            n.requestAnimationFrame = window.requestAnimationFrame || function (n) {
                "function" == typeof n && window.setTimeout(n, 16.7)
            }
        }(y = t.SafeBrowserApis || (t.SafeBrowserApis = {})),
            function (n) {
                n[n.right = 0] = "right";
                n[n.left = 1] = "left"
            }(t.Direction || (t.Direction = {}));
        c = t.Direction;
        ! function (n) {
            n[n.animationend = 0] = "animationend";
            n[n.blur = 1] = "blur";
            n[n.change = 2] = "change";
            n[n.click = 3] = "click";
            n[n.DOMContentLoaded = 4] = "DOMContentLoaded";
            n[n.DOMNodeInserted = 5] = "DOMNodeInserted";
            n[n.DOMNodeRemoved = 6] = "DOMNodeRemoved";
            n[n.ended = 7] = "ended";
            n[n.error = 8] = "error";
            n[n.focus = 9] = "focus";
            n[n.focusin = 10] = "focusin";
            n[n.load = 11] = "load";
            n[n.keydown = 12] = "keydown";
            n[n.keypress = 13] = "keypress";
            n[n.keyup = 14] = "keyup";
            n[n.loadedmetadata = 15] = "loadedmetadata";
            n[n.mousedown = 16] = "mousedown";
            n[n.mousemove = 17] = "mousemove";
            n[n.mouseout = 18] = "mouseout";
            n[n.mouseover = 19] = "mouseover";
            n[n.mouseup = 20] = "mouseup";
            n[n.onreadystatechange = 21] = "onreadystatechange";
            n[n.resize = 22] = "resize";
            n[n.scroll = 23] = "scroll";
            n[n.submit = 24] = "submit";
            n[n.timeupdate = 25] = "timeupdate";
            n[n.touchstart = 26] = "touchstart";
            n[n.touchend = 27] = "touchend";
            n[n.wheel = 28] = "wheel"
        }(t.eventTypes || (t.eventTypes = {}));
        r = t.eventTypes;
        t.addEvent = f;
        t.addEvents = g;
        t.removeEvents = nt;
        t.preventDefault = tt;
        t.addThrottledEvent = it;
        t.addThrottledEvents = rt;
        t.addDebouncedEvent = ut;
        t.documentReady = ft;
        t.onDeferred = et;
        t.addClass = p;
        t.removeClass = w;
        t.removeClasses = ot;
        t.addClasses = st;
        t.hasClass = b;
        t.removeElement = ht;
        t.selectElements = ct;
        t.selectFirstElement = lt;
        t.selectElementsT = o;
        t.selectFirstElementT = at;
        t.selectElementsFromSelectors = vt;
        t.nodeListToArray = s;
        t.getDirection = yt;
        t.getClientRect = l;
        t.getClientRectWithMargin = pt;
        t.css = e;
        t.removeEvent = h;
        t.isArray = k;
        t.toArray = u;
        t.isDescendent = wt;
        t.getText = bt;
        t.setText = kt;
        t.removeInnerHtml = dt;
        t.getEventTargetOrSrcElement = gt;
        t.getEvent = a;
        t.customEvent = ni;
        t.stopPropagation = ti;
        t.getScrollY = ii;
        t.getOffsetParent = ri;
        t.scrollElementIntoView = ui;
        t.isImageLoadedSuccessfully = fi;
        t.getCoordinates = ei;
        t.getParent = oi
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t];
    r = function (n, t) {
        "use strict";

        function r(n) {
            return !n || !i(n)
        }

        function i(n) {
            return n ? n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "") : null
        }

        function u(n, t, i) {
            return void 0 === i && (i = !0), !(!n || !t) && (i && (n = n.toLocaleLowerCase(), t = t.toLocaleLowerCase()), n.startsWith ? n.startsWith(t) : 0 === n.indexOf(t))
        }

        function f(n, t, i) {
            return void 0 === i && (i = !0), !(!n || !t) && (i && (n = n.toLocaleLowerCase(), t = t.toLocaleLowerCase()), n.endsWith ? n.endsWith(t) : n.lastIndexOf(t) === n.length - t.length)
        }

        function e(n, t, i) {
            if (void 0 === i && (i = !0), !n || !t) return 0;
            var r = 0;
            for (i && (n = n.toLocaleLowerCase(), t = t.toLocaleLowerCase()); n.charCodeAt(r) === t.charCodeAt(r);) r++;
            return r
        }

        function o(n) {
            for (var i = [], t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
            return n.replace(/{(\d+)}/g, function (n, t) {
                if (t >= i.length) return n;
                var r = i[t];
                return "number" == typeof r || r ? "string" == typeof r ? r : r.toString() : ""
            })
        }
        t.isNullOrWhiteSpace = r;
        t.trim = i;
        t.startsWith = u;
        t.endsWith = f;
        t.getMatchLength = e;
        t.format = o
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(10)];
    r = function (n, t, i) {
        "use strict";

        function r(n) {
            return !isNaN(n) && "number" == typeof n
        }

        function u() {
            return window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth
        }

        function o() {
            return window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight
        }

        function s(n) {
            if (null != n) return {
                width: n.clientWidth,
                height: n.clientHeight
            }
        }

        function h(n) {
            var t;
            if ((n = n || window.event, !n) || (t = n.key || n.keyIdentifier, !t)) return t;
            switch (t) {
                case "Left":
                    return "ArrowLeft";
                case "Right":
                    return "ArrowRight";
                case "Up":
                    return "ArrowUp";
                case "Down":
                    return "ArrowDown";
                case "Esc":
                    return "Escape";
                default:
                    return t
            }
        }

        function c(n) {
            return n = n || window.event, null == n ? null : n.which || n.keyCode || n.charCode
        }

        function l(n, t, i, r) {
            var f = "",
                u;
            r && (u = new Date, u.setTime(u.getTime() + 864e5 * r), f = "; expires=" + u.toUTCString());
            window.document.cookie = n + "=" + encodeURIComponent(t) + f + ("; path=" + i + ";")
        }

        function a(n) {
            var t, i;
            if (n)
                for (t = 0, i = document.cookie.split("; "); t < i.length; t++) {
                    var r = i[t],
                        e = r.indexOf("="),
                        u = f(r.substring(0, e));
                    if (u === n) return f(r.substring(u.length + 1))
                }
            return null
        }

        function f(n) {
            return n = decodeURIComponent(n.replace("/+/g", " ")), 0 === n.indexOf('"') && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), n
        }

        function v(n) {
            var u;
            if (n && 6 === n.length) {
                var t = parseInt(n.substring(0, 2), 16),
                    i = parseInt(n.substring(2, 4), 16),
                    r = parseInt(n.substring(4, 6), 16);
                if (!isNaN(t) && !isNaN(i) && !isNaN(r)) return u = (299 * t + 587 * i + 114 * r) / 255e3, u >= .5 ? 2 : 1
            }
            return null
        }

        function y(n, t, i) {
            return !!(i && r(n) && r(t) && r(i.left) && r(i.right) && r(i.top) && r(i.bottom)) && n >= i.left && n <= i.right && t >= i.top && t <= i.bottom
        }

        function p(n) {
            console && console.warn ? console.warn(n) : console && console.error && console.error(n)
        }

        function w(n) {
            if (!i.isNullOrWhiteSpace(n) && window.performance && window.performance.mark) {
                var t = n.split(" ").join("_");
                window.performance.mark(t);
                window.console && window.console.timeStamp && window.console.timeStamp(t)
            }
        }

        function b(n) {
            if (!r(n) || n <= 0) return "00:00";
            var t = Math.floor(n / 3600),
                i = n % 3600,
                u = Math.floor(i / 60),
                f = t > 0 ? t + ":" : "";
            return n = Math.floor(i % 60), f += (u < 10 ? "0" : "") + u, f + (":" + (0 === n ? "00" : (n < 10 ? "0" : "") + n))
        }

        function k(n) {
            if (!JSON || !JSON.parse) throw new Error("JSON.parse unsupported.");
            if (!n) throw new Error("Invalid json.");
            return JSON.parse(n)
        }

        function e() {
            for (var t, i, n = [], r = 0; r < arguments.length; r++) n[+r] = arguments[r];
            for (t = 1; t < n.length; t++)
                for (i in n[t]) n[t].hasOwnProperty(i) && (n[0][i] = "object" == typeof n[t][i] ? e(n[0][i] || {}, n[t][i]) : n[t][i]);
            return arguments[0]
        }

        function d(n, t, i, r, u) {
            var f = !i || i < 0 ? -1 : Number(new Date) + i;
            t = t || 100,
                function i() {
                    var e = n();
                    if (e && r) r();
                    else {
                        if (e) return;
                        if (f === -1 || Number(new Date) < f) setTimeout(i, t);
                        else {
                            if (!u) return;
                            u()
                        }
                    }
                }()
        }

        function g(n) {
            n = n.replace(/[\[\]]/g, "\\$&");
            var i = new RegExp("[\\?&]" + n.toLowerCase() + "=([^&#]*)"),
                t = i.exec(location.search.toLowerCase());
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        }
        t.isNumber = r;
        t.getWindowWidth = u;
        t.getWindowHeight = o;
        t.getDimensions = s;
        t.getVirtualKey = h;
        t.getKeyCode = c;
        t.setCookie = l;
        t.getCookie = a;
        t.detectContrast = v;
        t.pointInRect = y;
        t.apiDeprecated = p;
        t.createPerfMarker = w;
        t.toElapsedTimeString = b;
        t.parseJson = k;
        t.extend = e;
        t.poll = d;
        t.getQSPValue = g;
        var nt;
        ! function (n) {
            function t() {
                var t;
                if (window.matchMedia) {
                    for (t = 0; t < n.allWidths.length; ++t)
                        if (!window.matchMedia("(min-width:" + n.allWidths[t] + "px)").matches) return t
                } else
                    for (t = 0; t < n.allWidths.length; ++t)
                        if (!(u() >= n.allWidths[t])) return t;
                return n.allWidths.length
            }
            n.allWidths = [320, 540, 768, 1084, 1400, 1779];
            n.vpMin = n.allWidths[0];
            n.vpMax = 2048;
            n.getViewport = t
        }(nt = t.Viewports || (t.Viewports = {}))
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r, f = this && this.__extends || function (n, t) {
        function r() {
            this.constructor = n
        }
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    };
    u = [i, t, i(8), i(13), i(9), i(11)];
    r = function (n, t, i, r, u, e) {
        "use strict";
        var o = function (n) {
            function t(t) {
                var i = this;
                n.call(this, t);
                this.onKeyPressed = function (n) {
                    var t, r, f, e;
                    switch (n) {
                        case 37:
                        case 39:
                            i.isVerticalSlider || (t = i.primaryDirection === u.Direction.left ? i.stepOffset : -i.stepOffset, t = 37 === n ? -t : t, i.updateThumbOffset(i.thumbOffset + t, !0, !0));
                            break;
                        case 38:
                        case 40:
                            i.isVerticalSlider && (t = 38 === n ? i.stepOffset : -i.stepOffset, i.updateThumbOffset(i.thumbOffset + t, !0, !0), u.getEvent(event).preventDefault());
                            break;
                        case 33:
                            t = 2 * i.stepOffset;
                            i.updateThumbOffset(i.thumbOffset + t, !0, !0);
                            break;
                        case 34:
                            t = -(2 * i.stepOffset);
                            i.updateThumbOffset(i.thumbOffset + t, !0, !0);
                            break;
                        case 36:
                            r = parseInt(i.input.getAttribute("min"), 10) || 0;
                            i.updateThumbOffset(r, !0, !0);
                            break;
                        case 35:
                            f = parseInt(i.input.getAttribute("step"), 10);
                            e = i.thumbRange + f;
                            i.updateThumbOffset(e, !0, !0)
                    }
                };
                this.onKeyDown = function (n) {
                    i.onKeyPressed(e.getKeyCode(u.getEvent(n)))
                };
                this.onMouseDown = function (n) {
                    return n = u.getEvent(n), i.setupDimensions(), u.getEventTargetOrSrcElement(n) === i.thumb ? (u.addEvent(document, u.eventTypes.mousemove, i.onMouseMove), void u.addEvent(document, u.eventTypes.mouseup, i.onMouseUp)) : void i.moveThumbTo(n.clientX, n.clientY)
                };
                this.onMouseMove = function (n) {
                    n = u.getEvent(n);
                    i.moveThumbTo(n.clientX, n.clientY)
                };
                this.onMouseUp = function () {
                    u.removeEvent(document, u.eventTypes.mousemove, i.onMouseMove);
                    u.removeEvent(document, u.eventTypes.mouseup, i.onMouseUp)
                };
                this.onWindowResized = function () {
                    i.setupDimensions()
                };
                this.update()
            }
            return f(t, n), t.prototype.update = function () {
                if (this.element) {
                    this.input = u.selectFirstElement("input", this.element);
                    this.primaryDirection = u.getDirection(this.element);
                    this.isVerticalSlider = u.hasClass(this.input, "f-vertical");
                    u.addClass(this.input, "x-screen-reader");
                    var n = parseInt(this.input.getAttribute("min"), 10) || 0,
                        t = parseInt(this.input.getAttribute("max"), 10) || 100,
                        i = parseInt(this.input.getAttribute("value"), 10),
                        r = parseInt(this.input.getAttribute("step"), 10);
                    this.element.children[this.element.children.length - 1] === this.input ? (this.mockSlider = document.createElement("div"), this.thumb = document.createElement("button"), this.thumb.setAttribute("role", "slider"), this.thumb.setAttribute("aria-valuemin", n.toString()), this.thumb.setAttribute("aria-valuemax", t.toString()), this.thumb.setAttribute("aria-valuenow", i.toString()), this.valueTooltip = document.createElement("span"), this.track = document.createElement("span"), this.thumb.appendChild(this.valueTooltip), this.mockSlider.appendChild(this.thumb), this.mockSlider.appendChild(this.track), this.element.appendChild(this.mockSlider), this.ignoreNextDOMChange = !0) : (this.mockSlider = this.element.children[this.element.children.length - 1], this.thumb = this.mockSlider.firstElementChild, this.valueTooltip = this.thumb.firstElementChild, this.track = this.mockSlider.children[this.mockSlider.children.length - 1]);
                    this.halfThumbOffset = this.thumb.clientWidth / 2;
                    this.resetSliderInternal(n, t, i, r, !0) && (u.addEvent(this.element, u.eventTypes.mousedown, this.onMouseDown), u.addEvent(this.thumb, u.eventTypes.keydown, this.onKeyDown), this.resizeListener = u.addDebouncedEvent(window, u.eventTypes.resize, this.onWindowResized))
                }
            }, t.prototype.teardown = function () {
                u.removeEvent(this.element, u.eventTypes.mousedown, this.onMouseDown);
                u.removeEvent(this.thumb, u.eventTypes.keydown, this.onKeyDown);
                u.removeEvent(window, u.eventTypes.resize, this.resizeListener);
                this.input = null;
                this.mockSlider = null;
                this.thumb = null;
                this.valueTooltip = null;
                this.track = null;
                this.resizeListener = null
            }, t.prototype.resetSlider = function (n, t, i, r) {
                return this.resetSliderInternal(n, t, i, r, !1)
            }, t.prototype.resetSliderInternal = function (n, t, i, r, u) {
                return !(!e.isNumber(n) || !e.isNumber(t)) && !(Math.max(n, t) - Math.min(n, t) <= 0) && (this.min = Math.min(n, t), this.max = Math.max(n, t), this.range = this.max - this.min, this.step = isNaN(r) ? this.range / 10 : r, this.value = Math.min(Math.max(isNaN(i) ? isNaN(this.value) ? this.min : this.value : i, this.min), this.max), this.setupDimensions(), this.updateThumbOffset(this.thumbOffset, u, !1), !0)
            }, t.prototype.setValue = function (n) {
                return !(!e.isNumber(n) || n < this.min || n > this.max) && (n !== this.value && (this.thumbOffset = (n - this.min) * this.thumbRange / this.range + this.halfThumbOffset, this.updateThumbOffset(this.thumbOffset, !1, !1)), !0)
            }, t.prototype.setupDimensions = function () {
                this.dimensions = u.getClientRect(this.mockSlider);
                this.isVerticalSlider ? (this.dimensions.left -= t.hitPadding, this.dimensions.right += t.hitPadding, this.thumbRange = this.dimensions.height - this.thumb.clientWidth, this.maxThumbOffset = this.dimensions.height) : (this.dimensions.top -= t.hitPadding, this.dimensions.bottom += t.hitPadding, this.thumbRange = this.dimensions.width - this.thumb.clientWidth, this.maxThumbOffset = this.dimensions.width);
                this.thumbRange = Math.max(this.thumbRange, 1);
                this.thumbOffset = (this.value - this.min) * this.thumbRange / this.range + this.halfThumbOffset;
                this.stepOffset = this.thumbRange / (this.range / this.step);
                this.setThumbPosition()
            }, t.prototype.setThumbPosition = function () {
                var n = Math.max(0, this.thumbOffset - this.halfThumbOffset);
                u.css(this.thumb, u.Direction[this.primaryDirection], n + "px");
                u.css(this.track, "width", n + "px")
            }, t.prototype.updateThumbOffset = function (n, t, i) {
                e.isNumber(n) || (n = this.thumbOffset);
                this.thumbOffset = Math.min(Math.max(0, n), this.maxThumbOffset);
                var r = 1e3 * Math.max(0, this.thumbOffset - this.halfThumbOffset) * this.range / this.thumbRange;
                r = Math.round(r) / 1e3 + this.min;
                this.value = Math.min(Math.max(this.min, r), this.max);
                this.valueTooltipText = null;
                this.initiatePublish({
                    value: this.value,
                    internal: t,
                    userInitiated: i
                });
                this.valueTooltipText || (this.valueTooltipText = Math.round(this.value).toString());
                isNaN(parseFloat(this.valueTooltipText)) || this.valueTooltipText.match(":") ? (this.input.setAttribute("value", r.toString()), this.thumb.setAttribute("aria-valuenow", r.toString()), this.thumb.setAttribute("aria-valuetext", this.valueTooltipText)) : (this.input.setAttribute("value", this.valueTooltipText), this.thumb.setAttribute("aria-valuenow", this.valueTooltipText));
                this.valueTooltip.innerHTML = this.valueTooltipText;
                this.setThumbPosition()
            }, t.prototype.publish = function (n, t) {
                var i = n.onValueChanged(t);
                i && !this.valueTooltipText && (this.valueTooltipText = i)
            }, t.prototype.moveThumbTo = function (n, t) {
                if (e.pointInRect(n, t, this.dimensions)) {
                    var i = this.dimensions.bottom - t;
                    this.isVerticalSlider || (i = this.primaryDirection === u.Direction.left ? n - this.dimensions.left : this.dimensions.right - n);
                    this.updateThumbOffset(i, !0, !0)
                }
            }, t.init = function (n) {
                e.apiDeprecated("Slider.init() is deprecated, please use ComponentFactory.create() instead.");
                i.ComponentFactory.create([{
                    component: t,
                    selector: n ? n.selector : null,
                    eventToBind: n ? n.eventToBind : null
                }])
            }, t.selector = ".c-slider", t.hitPadding = 20, t
        }(r.Publisher);
        t.Slider = o
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r, f = this && this.__extends || function (n, t) {
        function r() {
            this.constructor = n
        }
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    };
    u = [i, t, i(14)];
    r = function (n, t, i) {
        "use strict";
        var r = function (n) {
            function t(t, i) {
                void 0 === i && (i = null);
                n.call(this, t, i);
                this.element = t
            }
            return f(t, n), t.prototype.subscribe = function (n) {
                if (!n) return !1;
                if (this.subscribers) {
                    if (this.subscribers.indexOf(n) !== -1) return !1
                } else this.subscribers = [];
                return this.subscribers.push(n), !0
            }, t.prototype.unsubscribe = function (n) {
                if (!n || !this.subscribers || !this.subscribers.length) return !1;
                var t = this.subscribers.indexOf(n);
                return t !== -1 && (this.subscribers.splice(t, 1), !0)
            }, t.prototype.hasSubscribers = function () {
                return !!this.subscribers && this.subscribers.length > 0
            }, t.prototype.initiatePublish = function (n) {
                var t, i, r;
                if (this.hasSubscribers())
                    for (t = 0, i = this.subscribers; t < i.length; t++) r = i[t], this.publish(r, n)
            }, t.prototype.update = function () { }, t.prototype.teardown = function () { }, t
        }(i.ObservableComponent);
        t.Publisher = r
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(9)];
    r = function (n, t, i) {
        "use strict";
        var r = function () {
            function n(t, i) {
                void 0 === i && (i = null);
                this.element = t;
                this.ignoreNextDOMChange = !1;
                n.shouldInitializeAsClass(t, i) && this.setObserver()
            }
            return n.prototype.unObserve = function () {
                this.modernObserver && this.modernObserver.disconnect();
                i.removeEvent(this.element, i.eventTypes.DOMNodeInserted, this.obsoleteNodeInsertedEventHander);
                i.removeEvent(this.element, i.eventTypes.DOMNodeRemoved, this.obsoleteNodeRemovedEventHandler)
            }, n.prototype.setObserver = function () {
                "undefined" != typeof n.mutationObserver ? this.observeModern() : "MutationEvent" in window && this.observeObsolete()
            }, n.prototype.observeModern = function () {
                var n = this;
                this.modernObserver = new MutationObserver(function (t) {
                    n.onModernMutations(t)
                });
                this.modernObserver.observe(this.element, {
                    childList: !0,
                    subtree: !0
                })
            }, n.prototype.onModernMutations = function (n) {
                var t, o;
                if (this.ignoreNextDOMChange) return void (this.ignoreNextDOMChange = !1);
                for (var r = !1, u = !1, f = 0, e = n; f < e.length; f++) {
                    for (var i = e[f], t = 0, s = i.addedNodes.length; t < s; t++) 1 === i.addedNodes[t].nodeType && (r = !0, u = !0);
                    for (t = 0, o = i.removedNodes.length; t < o; t++) 1 === i.removedNodes[t].nodeType && (r = !0, i.removedNodes[t] !== this.element && (u = !0))
                }
                r && this.teardown();
                u && this.update()
            }, n.prototype.observeObsolete = function () {
                var n = this;
                this.obsoleteNodeInsertedEventHander = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeInserted, function () {
                    n.onObsoleteNodeInserted()
                });
                this.obsoleteNodeRemovedEventHandler = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeRemoved, function (t) {
                    n.onObsoleteNodeRemoved(t)
                })
            }, n.prototype.onObsoleteNodeInserted = function () {
                this.ignoreNextDOMChange || (this.teardown(), this.update())
            }, n.prototype.onObsoleteNodeRemoved = function (n) {
                this.ignoreNextDOMChange || (this.teardown(), i.getEventTargetOrSrcElement(n) !== this.element && this.update())
            }, n.shouldInitializeAsClass = function (t, i) {
                var r = t ? t.getAttribute(n.mwfClassAttribute) : null,
                    u = t ? t.getAttribute(n.initializeAttribute) : null;
                return "false" !== u && !!t && (!r || !!i && r === i.mwfClass)
            }, n.mwfClassAttribute = "data-mwf-class", n.initializeAttribute = "data-js-initialize", n.mutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, n
        }();
        t.ObservableComponent = r
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(10), i(1)];
    r = function (n, t, i, r) {
        "use strict";
        var e = {
            "az-latn-az": "az-latn",
            "bs-latn-ba": "bs",
            "gd-gb": "gd-latn",
            "ha-latn-ng": "ha-latn",
            "ig-ng": "ig-latn",
            "ky-kg": "ky-cyrl",
            "mn-mn": "mn-cyrl",
            "prs-arab": "prs-af",
            "pt-ao": "pt-pt",
            "pt-mz": "pt-pt",
            "quc-latn-gt": "qut-latn",
            "sd-arab-pk": "sd-arab",
            "sr-latn-rs": "sr-latn",
            "tg-cyrl-tj": "tg-cyrl",
            "tk-tm": "tk-latn",
            "tt-ru": "tt-cyrl",
            "ug-cn": "ug-arab",
            "uz-latn-uz": "uz-latn",
            "wo-sn": "wo-latn",
            "yo-ng": "yo-latn",
            "zh-cn": "zh-hans",
            "zh-tw": "zh-hant"
        },
            u = {
                af: "af",
                am: "am",
                ar: "ar",
                as: "as",
                "az-latn": "az-latn",
                be: "be",
                bg: "bg",
                "bn-bd": "bn-bd",
                "bn-in": "bn-in",
                bs: "bs",
                "ca-es-valencia": "ca-es-valencia",
                ca: "ca",
                "chr-cher": "chr-cher",
                cs: "cs",
                cy: "cy",
                da: "da",
                "de-at": "de-at",
                "de-ch": "de-ch",
                de: "de",
                el: "el",
                "en-au": "en-au",
                "en-ca": "en-ca",
                "en-gb": "en-gb",
                "en-in": "en-in",
                en: "en",
                "es-ar": "es-ar",
                "es-es": "es-es",
                es: "es",
                et: "et",
                eu: "eu",
                fa: "fa",
                fi: "fi",
                fil: "fil",
                "fr-be": "fr-be",
                "fr-ca": "fr-ca",
                fr: "fr",
                ga: "ga",
                "gd-latn": "gd-latn",
                gl: "gl",
                gu: "gu",
                "ha-latn": "ha-latn",
                he: "he",
                hi: "hi",
                hr: "hr",
                hu: "hu",
                hy: "hy",
                id: "id",
                "ig-latn": "ig-latn",
                is: "is",
                it: "it",
                ja: "ja",
                ka: "ka",
                kk: "kk",
                km: "km",
                kn: "kn",
                ko: "ko",
                kok: "kok",
                "ku-arab": "ku-arab",
                "ky-cyrl": "ky-cyrl",
                lb: "lb",
                lo: "lo",
                lt: "lt",
                lv: "lv",
                "mi-latn": "mi-latn",
                mk: "mk",
                ml: "ml",
                "mn-cyrl": "mn-cyrl",
                mr: "mr",
                ms: "ms",
                mt: "mt",
                "nb-no": "nb-no",
                ne: "ne",
                "nl-be": "nl-be",
                nl: "nl",
                nn: "nn",
                nso: "nso",
                or: "or",
                "pa-arab": "pa-arab",
                pa: "pa",
                pl: "pl",
                "prs-af": "prs-af",
                "pt-br": "pt-br",
                "pt-pt": "pt-pt",
                "quc-latn": "quc-latn",
                quz: "quz",
                ro: "ro",
                ru: "ru",
                rw: "rw",
                "sd-arab": "sd-arab",
                si: "si",
                sk: "sk",
                sl: "sl",
                sq: "sq",
                "sr-cyrl-ba": "sr-cyrl-ba",
                "sr-cyrl-rs": "sr-cyrl-rs",
                "sr-latn": "sr-latn",
                sv: "sv",
                sw: "sw",
                ta: "ta",
                te: "te",
                "tg-cyrl": "tg-cyrl",
                th: "th",
                ti: "ti",
                "tk-latn": "tk-latn",
                tn: "tn",
                tr: "tr",
                "tt-cyrl": "tt-cyrl",
                "ug-arab": "ug-arab",
                uk: "uk",
                ur: "ur",
                "uz-latn": "uz-latn",
                vi: "vi",
                "wo-latn": "wo-latn",
                xh: "xh",
                "yo-latn": "yo-latn",
                "zh-hans": "zh-hans",
                "zh-hant": "zh-hant",
                "zh-hk": "zh-hk",
                zu: "zu"
            },
            o = {
                closecaption_off: "Off",
                geolocation_error: "We're sorry, this video cannot be played from your current location.",
                media_err_aborted: "video playback was aborted",
                media_err_decode: "video is not readable",
                media_err_network: "video failed to download",
                media_err_src_not_supported: "video format is not supported",
                media_err_unknown_error: "unknown error occurred",
                media_err_amp_encrypt: "The video is encrypted and we do not have the keys to decrypt it.",
                media_err_amp_player_mismatch: "No compatible source was found for this video.",
                browserunsupported: "We're sorry, but your browser does not support this video.",
                expand: "Full Screen",
                mute: "Mute",
                nullvideoerror: "We're sorry, this video cannot be played.",
                pause: "Pause",
                play: "Play",
                playbackerror: "We're sorry, an error has occurred when playing video ({0}).",
                standarderror: "We're sorry, this video can't be played.",
                time: "Time",
                more_caption: "More",
                data_error: "Sorry, this video cannot be played.",
                seek: "Seek",
                unexpand: "Exit Full Screen",
                unmute: "Unmute",
                volume: "Volume",
                quality: "Quality",
                quality_hd: "HD",
                quality_hq: "HQ",
                quality_lo: "LO",
                quality_sd: "SD",
                quality_auto: "Auto",
                closecaption: "CC / Subtitles",
                close_text: "Close",
                playbackspeed: "Playback speed",
                playbackspeed_normal: "Normal",
                sharing_label: "Share",
                sharing_facebook: "Facebook",
                sharing_twitter: "Twitter",
                sharing_linkedin: "LinkedIn",
                sharing_skype: "Skype",
                sharing_mail: "Mail",
                sharing_copy: "Copy link"
            },
            f;
        t.ccCultureLocStrings = {
            "ar-ab": "عربي",
            "ar-xm": "عربي",
            "ar-ma": "عربي",
            "ar-sa": "عربي",
            "eu-es": "Euskara",
            "bg-bg": "Български",
            "ca-es": "Català",
            "zh-cn": "简体中文",
            "zh-hk": "繁體中文",
            "zh-tw": "繁體中文",
            "hr-hr": "Hrvatski",
            "cs-cz": "Čeština",
            "da-dk": "Dansk",
            "nl-be": "Nederlands",
            "nl-nl": "Nederlands",
            "en-ab": "English",
            "en-aa": "English",
            "en-au": "English",
            "en-ca": "English",
            "en-eu": "English",
            "en-hk": "English",
            "en-in": "English",
            "en-id": "English",
            "en-ie": "English",
            "en-jm": "English",
            "en-my": "English",
            "en-nz": "English",
            "en-pk": "English",
            "en-ph": "English",
            "en-sg": "English",
            "en-za": "English",
            "en-tt": "English",
            "en-gb": "English",
            "en-us": "English",
            "et-ee": "Eesti",
            "fi-fi": "Suomi",
            "fr-ab": "Français",
            "fr-be": "Français",
            "fr-ca": "Français",
            "fr-fr": "Français",
            "fr-xf": "Français",
            "fr-ch": "Français",
            "gl-es": "Galego",
            "de-de": "Deutsch",
            "de-at": "Deutsch",
            "de-ch": "Deutsch",
            "el-gr": "Ελληνικά",
            "he-il": "עברית",
            "hi-in": "हिंदी",
            "hu-hu": "Magyar",
            "is-is": "Íslenska",
            "id-id": "Bahasa Indonesia",
            "it-it": "Italiano",
            "ja-jp": "日本語",
            "kk-kz": "Қазақ",
            "ko-kr": "한국어",
            "lv-lv": "Latviešu",
            "lt-lt": "Lietuvių",
            "ms-my": "Bahasa Melayu (Asia Tenggara)‎",
            "nb-no": "Norsk (bokmål)",
            "nn-no": "Norsk (nynorsk)",
            "fa-ir": "فارسی",
            "pl-pl": "Polski",
            "pt-br": "Português (Brasil)‎",
            "pt-pt": "Português (Portugal)‎",
            "ro-ro": "Română",
            "ru-ru": "Русский",
            "sr-latn-RS": "Srpski",
            "sk-sk": "Slovenčina",
            "sl-si": "Slovenski",
            "es-ar": "Español",
            "es-cl": "Español",
            "es-co": "Español",
            "es-cr": "Español",
            "es-do": "Español",
            "es-ec": "Español",
            "es-us": "Español",
            "es-gt": "Español",
            "es-hn": "Español",
            "es-xl": "Español",
            "es-mx": "Español",
            "es-ni": "Español",
            "es-pa": "Español",
            "es-py": "Español",
            "es-pe": "Español",
            "es-pr": "Español",
            "es-es": "Español",
            "es-uy": "Español",
            "es-ve": "Español",
            "sv-se": "Svenska",
            "tl-ph": "Tagalog",
            "th-th": "ไทย",
            "tr-tr": "Türkçe",
            "uk-ua": "Українська",
            "ur-pk": "اردو",
            "vi-vn": "Tiếng Việt"
        };
        t.playerLocKeys = {
            closecaption_off: "closecaption_off",
            geolocation_error: "geolocation_error",
            media_err_aborted: "media_err_aborted",
            media_err_decode: "media_err_decode",
            media_err_network: "media_err_network",
            media_err_src_not_supported: "media_err_src_not_supported",
            media_err_unknown_error: "media_err_unknown_error",
            media_err_amp_encrypt: "media_err_amp_encrypt",
            media_err_amp_player_mismatch: "media_err_amp_player_mismatch",
            browserunsupported: "browserunsupported",
            expand: "expand",
            mute: "mute",
            nullvideoerror: "nullvideoerror",
            pause: "pause",
            play: "play",
            playbackerror: "playbackerror",
            standarderror: "standarderror",
            time: "time",
            more_caption: "more_caption",
            data_error: "data_error",
            seek: "seek",
            unexpand: "unexpand",
            unmute: "unmute",
            volume: "volume",
            quality: "quality",
            quality_hd: "quality_hd",
            quality_hq: "quality_hq",
            quality_lo: "quality_lo",
            quality_sd: "quality_sd",
            quality_auto: "quality_auto",
            closecaption: "closecaption",
            close_text: "close_text",
            playbackspeed: "playbackspeed",
            playbackspeed_normal: "playbackspeed_normal",
            sharing_label: "sharing_label",
            sharing_facebook: "sharing_facebook",
            sharing_twitter: "sharing_twitter",
            sharing_linkedin: "sharing_linkedin",
            sharing_skype: "sharing_skype",
            sharing_mail: "sharing_mail",
            sharing_copy: "sharing_copy"
        };
        f = function () {
            function n(n, t) {
                this.market = n;
                this.resPathOverride = t
            }
            return n.prototype.getLanguageFromMarket = function () {
                if (this.market) {
                    var n = this.market.split("-");
                    if (n.length) return n[0]
                }
                return null
            }, n.prototype.getLocFile = function (n) {
                return n ? (n = e[n] || n, u[n] || u[this.getLanguageFromMarket()]) : null
            }, n.prototype.getCorrectResourcePath = function () {
                return this.resPathOverride || (r.PlayerConfig.resourcePath.indexOf("%version") === -1 ? r.PlayerConfig.resourcePath : r.PlayerConfig.localResourcePath)
            }, n.prototype.queueRequest = function (t) {
                var u = this,
                    f, r;
                if (n.requestQueue[this.market]) return void n.requestQueue[this.market].push(t);
                if (n.requestQueue[this.market] = [t], f = this.getLocFile(this.market), !f) return void this.completeRequest();
                r = new XMLHttpRequest;
                r.onreadystatechange = function () {
                    4 === r.readyState && (200 === r.status && (n.resources[u.market] = JSON.parse(r.responseText)), u.completeRequest())
                };
                r.open("GET", i.format("{0}/{1}.json", this.getCorrectResourcePath(), f), !0);
                r.ontimeout = function () {
                    console.log("ontimeout");
                    u.completeRequest()
                };
                r.onerror = function () {
                    console.log("onerror");
                    u.completeRequest()
                };
                r.send()
            }, n.prototype.completeRequest = function () {
                var t, i, r;
                if (n.requestQueue[this.market]) {
                    for (t = 0, i = n.requestQueue[this.market]; t < i.length; t++) r = i[t], this.doCallback(r);
                    n.requestQueue[this.market] = null
                }
            }, n.prototype.doCallback = function (n) {
                n && "function" == typeof n && n()
            }, n.prototype.loadResources = function (t) {
                return !this.market || n.resources[this.market] ? void this.doCallback(t) : void this.queueRequest(t)
            }, n.prototype.getLocalizedValue = function (t) {
                return t ? n.resources[this.market] && n.resources[this.market][t] || o[t] || "" : ""
            }, n.resources = {}, n.requestQueue = {}, n
        }();
        t.LocalizationHelper = f
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(17), i(9), i(11)];
    r = function (n, t, i, r, u) {
        "use strict";
        var f = function () {
            function n(n) {
                this.element = n;
                this.lastPlayPosition = 0;
                this.ccLanguageId = null;
                this.resetCaptions()
            }
            return n.prototype.setCcLanguage = function (n, t) {
                if (this.element && n !== this.ccLanguageId) {
                    if (this.ttmlContext = null, this.resetCaptions(), !t) return void (this.ccLanguageId = null);
                    this.ccLanguageId = n;
                    this.loadClosedCaptions(t)
                }
            }, n.prototype.loadClosedCaptions = function (n) {
                var i = this,
                    t;
                n && (t = new XMLHttpRequest, t.onreadystatechange = function () {
                    4 === t.readyState && 200 === t.status && i.onClosedCaptionsLoaded(t.responseXML || t.responseText)
                }, t.open("GET", n, !0), t.setRequestHeader("Accept", "text/xml, application/xml"), t.send())
            }, n.prototype.onClosedCaptionsLoaded = function (t) {
                if (t) {
                    this.element.setAttribute(n.ariaHidden, "false");
                    var r = this.element.id ? this.element.id + "-" : "",
                        f = {
                            idPrefix: r,
                            fontMap: {
                                "default": "Segoe ui, Arial"
                            },
                            relatedMediaObjectRegion: u.getDimensions(this.element)
                        };
                    this.ttmlContext = i.TtmlParser.parse(t, f);
                    this.ttmlContext && (this.ttmlContext.setOwnerDocument(this.element.ownerDocument), this.ttmlContext.hasEvents() ? this.updateCaptions(this.lastPlayPosition) : this.element.setAttribute(n.ariaHidden, "true"))
                }
            }, n.prototype.updateCaptions = function (t) {
                var e, s, i, o, f;
                if ((this.lastPlayPosition = t, this.ttmlContext && this.ttmlContext.hasEvents()) && (e = Math.floor(1e3 * t), this.element.setAttribute(n.ariaHidden, "false"), s = u.getDimensions(this.element), this.ttmlContext.updateRelatedMediaObjectRegion(s) && this.resetCaptions(), this.ttmlContext.updateCurrentEvents(e))) {
                    for (this.element.setAttribute(n.ariaHidden, "true"), r.removeInnerHtml(this.element), i = 0, o = this.ttmlContext.getCues(e); i < o.length; i++) f = o[i], this.applyUserPreferencesOverrides(f), r.css(f, "background-color", ""), this.element.appendChild(f);
                    this.element.setAttribute(n.ariaHidden, "false")
                }
            }, n.prototype.resetCaptions = function () {
                this.ttmlContext && this.ttmlContext.resetCurrentEvents();
                this.element && (this.element.setAttribute(n.ariaHidden, "true"), r.removeInnerHtml(this.element))
            }, n.prototype.applyUserPreferencesOverrides = function (t) {
                var f, o, e, s, u, i;
                if (n.userPreferences) {
                    if (n.userPreferences.text)
                        for (f = 0, o = r.selectElements("p, span, br", t); f < o.length; f++) {
                            u = o[f];
                            for (i in n.userPreferences.text) n.userPreferences.text.hasOwnProperty(i) && r.css(u, i, n.userPreferences.text[i])
                        }
                    if (n.userPreferences.window)
                        for (e = 0, s = r.toArray(t.children); e < s.length; e++) {
                            u = s[e];
                            for (i in n.userPreferences.window) n.userPreferences.window.hasOwnProperty(i) && r.css(u, i, n.userPreferences.window[i])
                        }
                }
            }, n.ariaHidden = "aria-hidden", n
        }();
        t.VideoClosedCaptions = f
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(18), i(20), i(19), i(9), i(10)];
    r = function (n, t, i, r, u, f, e) {
        "use strict";
        var o = function () {
            function n() { }
            return n.parse = function (t, f) {
                var e, o, s, h;
                if (t = "string" == typeof t ? n.parseXml(t) : t, e = new i.TtmlContext, e.settings = new u.TtmlSettings(f), e.root = n.verifyRoot(t, e), e.body = n.getFirstElementByTagNameNS(e.root, "body", e.settings.ttmlNamespace), e.events = [], e.styleSetCache = [], e.body) {
                    try {
                        n.parseTtAttrs(e);
                        o = n.ensureRegions(e);
                        s = n.getAttributeNS(e.root, "timeBase", e.settings.ttmlParameterNamespace) || "media";
                        e.settings.supportedTimeBase.indexOf(s) !== -1 && (n.processAnonymousSpans(e, e.body), h = new r.TtmlTimeParser(e.settings.mediaFrameRate, e.settings.mediaTickRate), n.applyTiming(e, e.root, {
                            start: n.mediaStart,
                            end: n.mediaEnd
                        }, !0, h), n.applyStyling(e, o))
                    } catch (n) { }
                    e.events.push({
                        time: n.mediaEnd,
                        element: null
                    });
                    e.events.sort(function (n, t) {
                        return n.time - t.time
                    })
                }
                return e
            }, n.parseXml = function (n) {
                var i = null,
                    t;
                try {
                    window.DOMParser ? (t = new DOMParser, i = t.parseFromString(n, "application/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = !1, t.loadXML(n), i = t)
                } catch (n) {
                    i = null
                }
                return i
            }, n.verifyRoot = function (t, i) {
                var u, r = t.documentElement;
                return "tt" === n.getLocalTagName(r) && ("http://www.w3.org/ns/ttml" !== r.namespaceURI && (i.settings.ttmlNamespace = r.namespaceURI, i.settings.ttmlStyleNamespace = i.settings.ttmlNamespace + "#styling", i.settings.ttmlParameterNamespace = i.settings.ttmlNamespace + "#parameter", i.settings.ttmlMetaNamespace = i.settings.ttmlNamespace + "#metadata"), u = r), u
            }, n.parseTtAttrs = function (t) {
                var h = n.getAttributeNS(t.root, "cellResolution", t.settings.ttmlParameterNamespace),
                    u = n.getAttributeNS(t.root, "extent", t.settings.ttmlStyleNamespace),
                    f = null,
                    r, o, s, i, c, l;
                h && (r = e.trim(h).split(/\s+/), 2 === r.length && (o = Math.round(parseFloat(r[0])), s = Math.round(parseFloat(r[1])), s > 0 && o > 0 && (f = {
                    rows: s,
                    columns: o
                })));
                (f && (t.settings.cellResolution = f), u && "auto" !== u) && (i = u.split(/\s+/), 2 === i.length && "px" === i[0].substr(i[0].length - 2) && "px" === i[1].substr(i[1].length - 2) && (c = parseFloat(i[0].substr(0, i[0].length - 2)), l = parseFloat(i[1].substr(0, i[1].length - 2)), t.settings.rootContainerRegionDimensions = {
                    width: Math.round(c),
                    height: Math.round(l)
                }))
            }, n.ensureRegions = function (t) {
                var f, i, o, r;
                return t.rootContainerRegion = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "rootcontainerregion"), t.root.appendChild(t.rootContainerRegion), f = t.settings.rootContainerRegionDimensions ? e.format("{0}px {1}px", t.settings.rootContainerRegionDimensions.width, t.settings.rootContainerRegionDimensions.height) : "auto", t.rootContainerRegion.setAttributeNS(t.settings.ttmlStyleNamespace, "extent", f), i = n.getFirstElementByTagNameNS(t.root, "head", t.settings.ttmlNamespace), i || (i = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "head"), t.root.appendChild(i)), t.layout = n.getFirstElementByTagNameNS(i, "layout", t.settings.ttmlNamespace), t.layout || (t.layout = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "layout"), t.root.appendChild(t.layout)), o = t.layout.getElementsByTagNameNS(t.settings.ttmlNamespace, "region"), o.length || (r = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "region"), r.setAttributeNS(u.xmlNS, "id", "anonymous"), r.setAttribute("data-isanonymous", "1"), t.layout.appendChild(r), t.body.setAttributeNS(t.settings.ttmlNamespace, "region", "anonymous")), i
            }, n.processAnonymousSpans = function (t, i) {
                var o, a, u, s, h, c, v, r;
                if (n.isTagNS(i, "p", t.settings.ttmlNamespace)) {
                    for (var e = [], y = void 0, l = 0, p = f.nodeListToArray(i.childNodes); l < p.length; l++) r = p[l], r.nodeType === Node.TEXT_NODE && (y !== Node.TEXT_NODE && e.push([]), e[e.length - 1].push(r)), y = r.nodeType;
                    for (o = 0, a = e; o < a.length; o++)
                        for (u = a[o], s = t.root.ownerDocument.createElementNS(t.settings.ttmlNamespace, "span"), s.appendChild(u[0].parentNode.replaceChild(s, u[0])), h = 1; h < u.length; h++) s.appendChild(u[h])
                }
                for (c = 0, v = f.nodeListToArray(i.childNodes); c < v.length; c++) r = v[c], this.processAnonymousSpans(t, r)
            }, n.applyTiming = function (t, i, r, u, e) {
                var p = n.getAttributeNS(i, "begin", t.settings.ttmlNamespace),
                    o = p ? e.parse(p) : r.start,
                    s = 0,
                    d = 0,
                    l = 0,
                    a = 0,
                    v = n.getAttributeNS(i, "dur", t.settings.ttmlNamespace),
                    h = n.getAttributeNS(i, "end", t.settings.ttmlNamespace),
                    w, c;
                v || h ? v && h ? (l = e.parse(v), a = e.parse(h), w = Math.min(o + l, r.start + a), s = Math.min(w, r.end)) : h ? (a = e.parse(h), s = Math.min(r.start + a, r.end)) : (l = e.parse(v), s = Math.min(o + l, r.end)) : u && (o <= r.end ? (d = Math.max(0, r.end - o), s = r.end) : s = 0);
                s < o && (s = o);
                o = Math.floor(o);
                s = Math.floor(s);
                i.setAttribute("data-time-start", o.toString());
                i.setAttribute("data-time-end", s.toString());
                o >= 0 && t.events.filter(function (n) {
                    return n.time === o
                }).length <= 0 && t.events.push({
                    time: o,
                    element: i
                });
                for (var b = o, y = 0, k = f.nodeListToArray(i.childNodes); y < k.length; y++) c = k[y], c.nodeType === Node.ELEMENT_NODE && ("seq" !== n.getAttributeNS(i, "timeContainer", t.settings.ttmlNamespace) ? this.applyTiming(t, c, {
                    start: o,
                    end: s
                }, !0, e) : (this.applyTiming(t, c, {
                    start: b,
                    end: s
                }, !1, e), b = parseInt(c.getAttribute("data-time-end"), 10)))
            }, n.applyStyling = function (t, i) {
                for (var o, u = n.getFirstElementByTagNameNS(i, "styling", t.settings.ttmlNamespace), s = u ? f.nodeListToArray(u.getElementsByTagNameNS(t.settings.ttmlNamespace, "style")) : [], r = 0, e = f.nodeListToArray(t.root.querySelectorAll("*")); r < e.length; r++) o = e[r], this.applyStyle(t, o, s)
            }, n.applyStyle = function (t, i, r) {
                var u = {},
                    f, e;
                this.applyStylesheet(t.settings, u, i, r);
                n.applyInlineStyles(t.settings, u, i);
                f = !0;
                for (e in u)
                    if (u.hasOwnProperty(e)) {
                        f = !1;
                        break
                    }
                f || (i.setAttribute("data-styleSet", t.styleSetCache.length.toString()), t.styleSetCache.push(u))
            }, n.applyStylesheet = function (t, i, r, e) {
                for (var s, l, o, a = n.getAttributeNS(r, "style", t.ttmlNamespace), p = a ? a.split(/\s+/) : [], h = 0, v = p; h < v.length; h++)
                    for (var w = v[h], c = 0, y = e; c < y.length; c++) o = y[c], n.getAttributeNS(o, "id", u.xmlNS) === w && (this.applyStylesheet(t, i, o, e), n.applyInlineStyles(t, i, o));
                if (n.isTagNS(r, "region", t.ttmlNamespace))
                    for (s = 0, l = f.nodeListToArray(r.getElementsByTagNameNS(t.ttmlNamespace, "style")); s < l.length; s++) o = l[s], n.applyInlineStyles(t, i, o)
            }, n.applyInlineStyles = function (t, i, r) {
                for (var o, u = 0, s = f.nodeListToArray(r.attributes); u < s.length; u++) o = s[u], o.namespaceURI === t.ttmlStyleNamespace && (i[n.getLocalTagName(o)] = e.trim(o.nodeValue))
            }, n.getLocalTagName = function (n) {
                return n.localName || n.baseName
            }, n.isTagNS = function (n, t, i) {
                return n.namespaceURI === i && this.getLocalTagName(n) === t
            }, n.getAttributeNS = function (n, t, i) {
                var e = n.getAttributeNS(i, t),
                    u, o, r;
                if (!e)
                    for (u = 0, o = f.nodeListToArray(n.attributes); u < o.length; u++)
                        if (r = o[u], r.localName === t && r.lookupNamespaceURI(r.prefix) === i) {
                            e = r.value;
                            break
                        }
                return e
            }, n.getFirstElementByTagNameNS = function (n, t, i) {
                if (n) {
                    var r = n.getElementsByTagNameNS(i, t);
                    if (r && r.length) return r[0]
                }
                return null
            }, n.mediaStart = -1, n.mediaEnd = 99999999, n
        }();
        t.TtmlParser = o
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(17), i(19), i(9), i(10), i(11)];
    r = function (n, t, i, r, u, f, e) {
        "use strict";
        var o = function () {
            function n() {
                var t = this;
                this.translateToHtml = function (e, o, s) {
                    var c, h, v = t.getTagNameEquivalent(e),
                        l = "",
                        y = "",
                        a, p, w, b;
                    switch (v) {
                        case "ttml:region":
                            y = "cue ";
                        case "ttml:rootcontainerregion":
                        case "ttml:body":
                        case "ttml:div":
                            l = "div";
                            break;
                        case "ttml:p":
                            l = "p";
                            break;
                        case "ttml:span":
                            l = "span";
                            break;
                        case "ttml:br":
                            l = "br"
                    }
                    return a = i.TtmlParser.getAttributeNS(e, "role", t.settings.ttmlMetaNamespace), a && (y += " " + a), p = i.TtmlParser.getAttributeNS(e, "agent", t.settings.ttmlMetaNamespace), (p && (y += " " + p), "x-ruby" === a ? l = "ruby" : "x-rubybase" === a ? l = "rb" : "x-rubytext" === a && (l = "rt"), f.isNullOrWhiteSpace(l)) || (c = n.defaultStyle(t.ownerDocument.createElement(l)), u.addClass(c, f.trim(y)), w = i.TtmlParser.getAttributeNS(e, "title", t.settings.ttmlMetaNamespace), w && c.setAttribute("title", w), b = i.TtmlParser.getAttributeNS(e, "id", r.xmlNS), b && t.settings.idPrefix && c.setAttribute("id", t.settings.idPrefix + b), "ttml:region" === v && (h = c.appendChild(n.defaultStyle(t.ownerDocument.createElement("div"))), u.css(h, "display", "table"), u.css(h, "border-spacing", "0"), u.css(h, "cell-spacing", "0"), u.css(h, "cell-padding", "0"), u.css(h, "width", "100%"), u.css(h, "height", "100%"), h = h.appendChild(n.defaultStyle(t.ownerDocument.createElement("div"))), u.css(h, "display", "table-cell"), o.displayAlign && (t.translateStyle(v, h, {
                        displayAlign: o.displayAlign
                    }), o.displayAlign = null)), s && "ttml:span" === v && (h = c.appendChild(n.defaultStyle(t.ownerDocument.createElement("span"))), u.css(h, "white-space", "pre")), u.css(c, "position", "static"), u.css(c, "width", "100%"), t.translateStyle(v, c, o)), {
                            outerNode: c,
                            innerNode: h ? h : c
                        }
                }
            }
            return n.prototype.setOwnerDocument = function (n) {
                this.ownerDocument = n
            }, n.prototype.updateRelatedMediaObjectRegion = function (n) {
                return (!this.settings.relatedMediaObjectRegion || n.width !== this.settings.relatedMediaObjectRegion.width || n.height !== this.settings.relatedMediaObjectRegion.height) && (this.settings.relatedMediaObjectRegion = {
                    width: n.width,
                    height: n.height
                }, !0)
            }, n.prototype.hasEvents = function () {
                return this.events && !!this.events.length
            }, n.prototype.resetCurrentEvents = function () {
                this.currentEvents = []
            }, n.prototype.updateCurrentEvents = function (n) {
                var t = this.getTemporallyActiveEvents(n),
                    r = this.currentEvents ? this.currentEvents.length : 0,
                    u = t ? t.length : 0,
                    i;
                if (r !== u) return this.currentEventsTime = n, this.currentEvents = t, !0;
                if (this.currentEvents)
                    for (i = 0; i < r; i++)
                        if (this.currentEvents[i].time !== t[i].time) return this.currentEventsTime = n, this.currentEvents = t, !0;
                return !1
            }, n.prototype.getTemporallyActiveEvents = function (n) {
                var t = this;
                return this.events.filter(function (i) {
                    return !i.element || t.isTemporallyActive(i.element, n)
                })
            }, n.prototype.isTemporallyActive = function (n, t) {
                return (parseInt(n.getAttribute("data-time-start"), 10) || 0) <= t && t < (parseInt(n.getAttribute("data-time-end"), 10) || 0)
            }, n.prototype.getCues = function (n) {
                var t = [],
                    o, s, v, e, y, rt;
                this.currentEventsTime !== n && this.updateCurrentEvents(n);
                for (var w = "preserve" === i.TtmlParser.getAttributeNS(this.root, "space", r.xmlNS), ut = this.layout ? this.layout.getElementsByTagNameNS(this.settings.ttmlNamespace, "region") : [], h = 0, b = ut; h < b.length; h++) {
                    var c = b[h],
                        k = i.TtmlParser.getAttributeNS(c, "id", r.xmlNS),
                        d = c.getAttribute("data-isanonymous");
                    if ((d || k) && (o = this.translate(c, this.settings.defaultRegionStyle, w, n, this.translateToHtml), o.outerNode)) {
                        for (var g = o.innerNode, l = o.outerNode, a = 0, nt = this.events; a < nt.length; a++) s = nt[a], s.element && this.isInRegion(s.element, d ? null : k) && (v = this.prune(s.element, o.inheritableStyleSet, w, n, this.translateToHtml), e = v.prunedElement, v.hasPreservedContent || !e || f.trim(u.getText(e)).length || (e = null), e && g.appendChild(e));
                        y = "always" === l.getAttribute("data-showBackground");
                        (y || g.children.length) && (y && l.removeAttribute("data-showBackground"), t.push(l))
                    }
                }
                if (t.length) {
                    for (var tt = this.translate(this.rootContainerRegion, {
                        overflow: "hidden",
                        padding: "0"
                    }, !1, n, this.translateToHtml), p = 0, it = t; p < it.length; p++) rt = it[p], tt.innerNode.appendChild(rt);
                    t = [];
                    t.push(tt.outerNode)
                }
                return t
            }, n.prototype.translate = function (n, t, i, r, u) {
                var f, e, o, s;
                return this.isTemporallyActive(n, r) && (o = this.getTagNameEquivalent(n), (e = this.getComputedStyleSet(n, t, o, r), "none" !== e.display) && (s = this.getApplicableStyleSet(e, o), f = u(n, s, i))), f ? {
                    outerNode: f.outerNode,
                    innerNode: f.innerNode,
                    inheritableStyleSet: this.getInheritableStyleSet(e)
                } : {
                        outerNode: null,
                        innerNode: null,
                        inheritableStyleSet: null
                    }
            }, n.prototype.translateStyle = function (n, t, i) {
                for (var r in i) i[r] && this.applyStyle(t, n, r, i[r])
            }, n.prototype.prune = function (n, t, f, e, o, s) {
                var v, a, h, d, l, b, k, p, c;
                if (void 0 === s && (s = !1), a = !1, h = this.translate(n, t, f, e, o), null !== h.outerNode) {
                    d = this.getTagNameEquivalent(n);
                    v = h.outerNode;
                    for (var y = h.innerNode, w = 0, g = u.nodeListToArray(n.childNodes); w < g.length; w++) l = g[w], l.nodeType === Node.COMMENT_NODE || (l.nodeType === Node.TEXT_NODE ? (y.appendChild(document.createTextNode(l.data)), f && "ttml:span" === d && (a = !0)) : (b = f, k = i.TtmlParser.getAttributeNS(l, "space", r.xmlNS), k && (b = "preserve" === k), p = this.prune(l, h.inheritableStyleSet, b, e, o, !0), a = a || p.hasPreservedContent, p.prunedElement && y.appendChild(p.prunedElement)));
                    if (!s)
                        for (c = n.parentNode; null !== c && c.nodeType === Node.ELEMENT_NODE && c !== this.body && (h = this.translate(c, t, f, e, o), h.outerNode);) y = h.innerNode, y.appendChild(v), v = h.outerNode, c = c.parentNode
                }
                return {
                    prunedElement: v,
                    hasPreservedContent: a
                }
            }, n.prototype.getComputedStyleSet = function (n, t, r, f) {
                var o = e.extend({}, t),
                    h, c;
                e.extend(o, this.styleSetCache[parseInt(n.getAttribute("data-styleSet"), 10)]);
                for (var a = n.getElementsByTagNameNS(this.settings.ttmlNamespace, "set"), s = 0, l = u.nodeListToArray(a); s < l.length; s++) h = l[s], this.isTemporallyActive(h, f) && i.TtmlParser.applyInlineStyles(this.settings, o, h);
                return "ttml:p" === r && "normal" === o.lineHeight && (c = this.appendSpanFontSizes(n, this.getInheritableStyleSet(o), f, ""), c && (o["computed-lineHeight"] = c)), o
            }, n.prototype.getApplicableStyleSet = function (n, t) {
                var i = {},
                    r;
                n.extent && this.isStyleApplicable(t, "extent") && (i.extent = n.extent);
                n.color && this.isStyleApplicable(t, "color") && (i.color = n.color);
                for (r in n) this.isStyleApplicable(t, r) && (i[r] = n[r]);
                return i
            }, n.prototype.isStyleApplicable = function (n, t) {
                switch (t) {
                    case "backgroundColor":
                    case "display":
                    case "visibility":
                        return "ttml:body ttml:div ttml:p ttml:region ttml:rootcontainerregion ttml:span ttml:br".indexOf(n) >= 0;
                    case "fontFamily":
                    case "fontSize":
                    case "fontStyle":
                    case "fontWeight":
                        return "ttml:p ttml:span ttml:br".indexOf(n) >= 0;
                    case "color":
                    case "textDecoration":
                    case "textOutline":
                    case "wrapOption":
                        return "ttml:span ttml:br".indexOf(n) >= 0;
                    case "direction":
                    case "unicodeBidi":
                        return "ttml:p ttml:span ttml:br".indexOf(n) >= 0;
                    case "displayAlign":
                    case "opacity":
                    case "origin":
                    case "overflow":
                    case "padding":
                    case "showBackground":
                    case "writingMode":
                    case "zIndex":
                        return "ttml:region ttml:rootcontainerregion".indexOf(n) >= 0;
                    case "extent":
                        return "ttml:tt ttml:region ttml:rootcontainerregion".indexOf(n) >= 0;
                    case "computed-lineHeight":
                    case "lineHeight":
                    case "textAlign":
                        return "ttml:p".indexOf(n) >= 0;
                    default:
                        return !1
                }
            }, n.prototype.getInheritableStyleSet = function (n) {
                var i = {},
                    t;
                for (t in n)
                    if (n.hasOwnProperty(t)) switch (t) {
                        case "backgroundColor":
                        case "computed-lineHeight":
                        case "display":
                        case "displayAlign":
                        case "extent":
                        case "opacity":
                        case "origin":
                        case "overflow":
                        case "padding":
                        case "showBackground":
                        case "unicodeBidi":
                        case "writingMode":
                        case "zIndex":
                            break;
                        default:
                            i[t] = n[t]
                    }
                return i
            }, n.prototype.appendSpanFontSizes = function (n, t, i, r) {
                for (var f, c, s, h, e = 0, o = u.nodeListToArray(n.childNodes); e < o.length; e++) f = o[e], f.nodeType === Node.ELEMENT_NODE && (c = this.getTagNameEquivalent(f), "ttml:span" === c && (s = this.getComputedStyleSet(f, t, "ttml:span", i), h = s.fontSize, h && (r += (r ? "," : "") + h), r = this.appendSpanFontSizes(f, this.getInheritableStyleSet(s), i, r)));
                return r
            }, n.prototype.isInRegion = function (n, t) {
                var e, r, o, f, s, h;
                if (!t || (e = i.TtmlParser.getAttributeNS(n, "region", this.settings.ttmlNamespace), e === t)) return !0;
                if (!e) {
                    for (r = n.parentNode; null !== r && r.nodeType === Node.ELEMENT_NODE;) {
                        if (o = this.getRegionId(r), o) return o === t;
                        r = r.parentNode
                    }
                    for (f = 0, s = u.nodeListToArray(n.getElementsByTagName("*")); f < s.length; f++)
                        if (h = s[f], this.getRegionId(h) === t) return !0
                }
                return !1
            }, n.prototype.getRegionId = function (n) {
                var t;
                return n.nodeType === Node.ELEMENT_NODE && n.namespaceURI === this.settings.ttmlNamespace && (t = "region" === i.TtmlParser.getLocalTagName(n) ? i.TtmlParser.getAttributeNS(n, "id", r.xmlNS) : i.TtmlParser.getAttributeNS(n, "region", this.settings.ttmlNamespace)), t
            }, n.prototype.getTagNameEquivalent = function (n) {
                var t = i.TtmlParser.getLocalTagName(n),
                    r = n.namespaceURI;
                return r === this.settings.ttmlNamespace ? "ttml:" + t : "http://www.w3.org/1999/xhtml" === r ? t : ""
            }, n.prototype.applyStyle = function (t, i, r, o) {
                var s = o,
                    p, h, d, g, tt, c, a;
                switch (r) {
                    case "color":
                    case "backgroundColor":
                        return s = n.ttmlToCssColor(o), void u.css(t, r, s);
                    case "direction":
                    case "display":
                        return void u.css(t, r, s);
                    case "displayAlign":
                        switch (o) {
                            case "before":
                                s = "top";
                                break;
                            case "center":
                                s = "middle";
                                break;
                            case "after":
                                s = "bottom"
                        }
                        return void u.css(t, "vertical-align", s);
                    case "extent":
                        return p = void 0, c = void 0, "auto" !== o && (a = o.split(/\s+/), 2 === a.length && (p = this.ttmlToCssUnits(a[0], !0), c = this.ttmlToCssUnits(a[1], !1))), p || (p = (this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions.width : this.settings.relatedMediaObjectRegion.width).toString() + "px", c = (this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions.height : this.settings.relatedMediaObjectRegion.height).toString() + "px"), u.css(t, "position", "absolute"), u.css(t, "width", p), u.css(t, "min-width", p), u.css(t, "max-width", p), u.css(t, "height", c), u.css(t, "min-height", c), void u.css(t, "max-height", c);
                    case "fontFamily":
                        return this.settings.fontMap && this.settings.fontMap[o] && (s = this.settings.fontMap[o]), "smallCaps" === o && u.css(t, "fontVariant", "small-caps"), void u.css(t, r, s);
                    case "fontSize":
                        return h = o.split(/\s+/), d = h.length > 1 ? h[1] : h[0], s = this.ttmlToCssFontSize(d, !1, .75, "ttml:region" === i), void u.css(t, r, s);
                    case "fontStyle":
                    case "fontWeight":
                        return void u.css(t, r, s);
                    case "lineHeight":
                        return g = "normal" === o ? o : this.ttmlToCssFontSize(o, !1), void u.css(t, "line-height", g);
                    case "computed-lineHeight":
                        for (var rt = o.split(","), w = -1, k = 0, nt = rt; k < nt.length; k++) tt = nt[k], (s = this.ttmlToCssFontSize(tt, !1), s && s.indexOf("px") === s.length - 2) && (c = parseFloat(s.substr(0, s.length - 2)), !isNaN(c) && c > w && (w = c));
                        return void (w >= 0 && u.css(t, "line-height", w + "px"));
                    case "origin":
                        "auto" !== o && (a = o.split(/\s+/), 2 === a.length && (u.css(t, "position", "absolute"), u.css(t, "left", this.ttmlToCssUnits(a[0], !0)), u.css(t, "top", this.ttmlToCssUnits(a[1], !1))));
                        return;
                    case "opacity":
                        return void u.css(t, r, s);
                    case "padding":
                        var l = e.getDimensions(t),
                            h = o.split(/\s+/),
                            v = void 0,
                            y = void 0,
                            b = void 0,
                            it = void 0;
                        switch (h.length) {
                            case 1:
                                v = this.ttmlToCssUnits(h[0], !1, l);
                                y = this.ttmlToCssUnits(h[0], !0, l);
                                s = f.format("{0} {1} {0} {1}", v, y);
                                break;
                            case 2:
                                v = this.ttmlToCssUnits(h[0], !1, l);
                                y = this.ttmlToCssUnits(h[1], !0, l);
                                s = f.format("{0} {1} {0} {1}", v, y);
                                break;
                            case 3:
                                v = this.ttmlToCssUnits(h[0], !1, l);
                                y = this.ttmlToCssUnits(h[1], !0, l);
                                b = this.ttmlToCssUnits(h[2], !1, l);
                                s = f.format("{0} {1} {2} {1}", v, y, b);
                                break;
                            case 4:
                                v = this.ttmlToCssUnits(h[0], !1, l);
                                y = this.ttmlToCssUnits(h[1], !0, l);
                                b = this.ttmlToCssUnits(h[2], !1, l);
                                it = this.ttmlToCssUnits(h[3], !0, l);
                                s = f.format("{0} {1} {2} {3}", v, y, b, it)
                        }
                        return u.css(t, "box-sizing", "border-box"), u.css(t, "border-style", "solid"), u.css(t, "border-color", "transparent"), void u.css(t, "border-width", s);
                    case "textAlign":
                        switch (o) {
                            case "start":
                                s = "left";
                                break;
                            case "end":
                                s = "right"
                        }
                        return void u.css(t, "text-align", s);
                    case "textDecoration":
                        return s = n.ttmlToCssTextDecoration(o), void u.css(t, "text-decoration", s);
                    case "textOutline":
                        return void u.css(t, "text-shadow", this.ttmlToCssTextOutline(s));
                    case "unicodeBidi":
                        switch (o) {
                            case "bidiOverride":
                                s = "bidi-override"
                        }
                        return void u.css(t, "unicode-bidi", s);
                    case "visibility":
                        return void u.css(t, r, s);
                    case "writingMode":
                        switch (o) {
                            case "lr":
                            case "lrtb":
                                return u.css(t, "writing-mode", "horizontal-tb"), u.css(t, "-webkit-writing-mode", "horizontal-tb"), void u.css(t, "writing-mode", "lr-tb");
                            case "rl":
                            case "rltb":
                                return u.css(t, "writing-mode", "horizontal-tb"), u.css(t, "-webkit-writing-mode", "horizontal-tb"), void u.css(t, "writing-mode", "rl-tb");
                            case "tblr":
                                return u.css(t, "text-orientation", "upright"), u.css(t, "writing-mode", "vertical-lr"), u.css(t, "-webkit-text-orientation", "upright"), u.css(t, "-webkit-writing-mode", "vertical-lr"), void u.css(t, "writing-mode", "tb-lr");
                            case "tb":
                            case "tbrl":
                                return u.css(t, "text-orientation", "upright"), u.css(t, "writing-mode", "vertical-rl"), u.css(t, "-webkit-text-orientation", "upright"), u.css(t, "-webkit-writing-mode", "vertical-rl"), void u.css(t, "writing-mode", "tb-rl")
                        }
                        return;
                    case "wrapOption":
                        return void u.css(t, "white-space", "noWrap" === o ? "nowrap" : "pre" === o ? "pre" : "normal");
                    case "zIndex":
                        return void u.css(t, r, s);
                    default:
                        return void u.css(t, r, s)
                }
            }, n.defaultStyle = function (t) {
                return u.css(t, "background-color", n.TtmlNamedColorMap.transparent), u.css(t, "offset", "0"), u.css(t, "margin", "0"), u.css(t, "padding", "0"), u.css(t, "border", "0"), t
            }, n.prototype.ttmlToCssUnits = function (n, t, i) {
                var e = n,
                    r, h;
                if (n && (r = n.charAt(n.length - 1), "c" === r || "%" === r)) {
                    var o = this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions : this.settings.relatedMediaObjectRegion,
                        s = parseFloat(n.substr(0, n.length - 1)),
                        f = t ? o.width : o.height,
                        u = void 0;
                    "c" === r ? (h = t ? this.settings.cellResolution.columns : this.settings.cellResolution.rows, u = s * f / h) : "%" === r && (i && (f = t ? i.width : i.height), u = f * s / 100);
                    u = Math.round(10 * u) / 10;
                    e = u + "px"
                }
                return e
            }, n.prototype.ttmlToCssFontSize = function (n, t, i, r) {
                var e, u;
                if (void 0 === i && (i = 1), void 0 === r && (r = !1), e = n, n && (u = n.charAt(n.length - 1), "c" === u || r && "%" === u)) {
                    var o = this.settings.rootContainerRegionDimensions ? this.settings.rootContainerRegionDimensions : this.settings.relatedMediaObjectRegion,
                        s = parseFloat(n.substr(0, n.length - 1)),
                        h = t ? o.width : o.height,
                        c = t ? this.settings.cellResolution.columns : this.settings.cellResolution.rows,
                        f = s * h / c;
                    "%" === u && (f /= 100);
                    f = Math.floor(f * i * 10) / 10;
                    e = f + "px"
                }
                return e
            }, n.prototype.ttmlToCssTextOutline = function (t) {
                var r = "none",
                    l, s, a, h, c;
                if (!f.isNullOrWhiteSpace(t) && "none" !== t) {
                    var u, i = t.split(/\s+/),
                        o = void 0,
                        e = void 0;
                    if (1 === i.length ? (o = $(this).css("color"), e = i[0], u = "") : 3 === i.length ? (o = i[0], e = i[1], u = i[2]) : 2 === i.length && (l = i[0].charAt(0), l >= "0" && l <= "9" ? (o = $(this).css("color"), e = i[0], u = i[1]) : (o = i[0], e = i[1], u = "")), u = this.ttmlToCssFontSize(u, !1, .75), e = this.ttmlToCssFontSize(e, !1, .75), i = n.lengthRegEx.exec(e), i && 3 === i.length) {
                        for (s = Math.round(parseFloat(i[1])), a = i[2], r = "", h = -s; h <= s; h++)
                            for (c = -s; c <= s; c++) 0 === h && 0 === c || (r += f.format("{0}{4} {1}{4} {2} {3}, ", h, c, u, n.ttmlToCssColor(o), a));
                        r && (r = r.substr(0, r.length - 2))
                    }
                }
                return r
            }, n.ttmlToCssTextDecoration = function (n) {
                for (var r, e, t, i = "", o = n.split(/\s+/), u = 0, s = o; u < s.length; u++) {
                    t = s[u];
                    switch (t) {
                        case "none":
                        case "noUnderline":
                        case "noLineThrough":
                        case "noOverline":
                            i = "none"
                    }
                }
                for (r = 0, e = o; r < e.length; r++) {
                    t = e[r];
                    switch (t) {
                        case "none":
                        case "noUnderline":
                        case "noLineThrough":
                        case "noOverline":
                            break;
                        case "lineThrough":
                            i += " line-through";
                            break;
                        default:
                            i += " " + t
                    }
                }
                return f.trim(i)
            }, n.ttmlToCssColor = function (t) {
                var r = t,
                    i;
                if (t = t.toLowerCase(), 0 === t.indexOf("rgba")) {
                    if (i = n.rgbaRegEx.exec(t), i && 5 === i.length) {
                        var u = i[1],
                            e = i[2],
                            o = i[3],
                            s = parseInt(i[4], 10);
                        r = f.format("rgba({0},{1},{2},{3})", u, e, o, Math.round(100 * s / 255) / 100)
                    }
                } else if ("#" === t.charAt(0) && 9 === t.length) {
                    var u = parseInt(t.substr(1, 2), 16),
                        e = parseInt(t.substr(3, 2), 16),
                        o = parseInt(t.substr(5, 2), 16),
                        s = parseInt(t.substr(7, 2), 16);
                    r = f.format("rgba({0},{1},{2},{3})", u, e, o, Math.round(100 * s / 255) / 100)
                } else n.TtmlNamedColorMap[t] && (r = n.TtmlNamedColorMap[t]);
                return r
            }, n.lengthRegEx = /\s*(\d+\.*\d*)(.*)\s*/, n.rgbaRegEx = /\s*rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)\s*/, n.TtmlNamedColorMap = {
                transparent: "rgba(0,0,0,0)",
                black: "rgba(0,0,0,1)",
                silver: "rgba(192,192,192,1)",
                gray: "rgba(128,128,128,1)",
                white: "rgba(255,255,255,1)",
                maroon: "rgba(128,0,0,1)",
                red: "rgba(255,0,0,1)",
                purple: "rgba(128,0,128,1)",
                fuchsia: "rgba(255,0,255,1)",
                magenta: "rgba(255,0,255,1)",
                green: "rgba(0,128,0,1)",
                lime: "rgba(0,255,0,1)",
                olive: "rgba(128,128,0,1)",
                yellow: "rgba(255,255,0,1)",
                navy: "rgba(0,0,128,1)",
                blue: "rgba(0,0,255,1)",
                teal: "rgba(0,128,128,1)",
                aqua: "rgba(0,255,255,1)",
                cyan: "rgba(0,255,255,1)"
            }, n
        }();
        t.TtmlContext = o
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(11)];
    r = function (n, t, i) {
        "use strict";
        t.xmlNS = "http://www.w3.org/XML/1998/namespace";
        var r = function () {
            function n(n) {
                this.ttmlNamespace = "http://www.w3.org/ns/ttml";
                this.ttmlStyleNamespace = "http://www.w3.org/ns/ttml#styling";
                this.ttmlParameterNamespace = "http://www.w3.org/ns/ttml#parameter";
                this.ttmlMetaNamespace = "http://www.w3.org/ns/ttml#metadata";
                this.idPrefix = "";
                this.mediaFrameRate = 30;
                this.mediaFrameRateMultiplier = 1;
                this.mediaSubFrameRate = 1;
                this.mediaTickRate = 1e3;
                this.supportedTimeBase = "media";
                this.cellResolution = {
                    rows: 15,
                    columns: 32
                };
                this.defaultRegionStyle = {
                    backgroundColor: "transparent",
                    color: "#E8E9EA",
                    direction: "ltr",
                    display: "auto",
                    displayAlign: "before",
                    extent: "auto",
                    fontFamily: "default",
                    fontSize: "1c",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    lineHeight: "normal",
                    opacity: "1",
                    origin: "auto",
                    overflow: "hidden",
                    padding: "0",
                    showBackground: "always",
                    textAlign: "start",
                    textDecoration: "none",
                    textOutline: "none",
                    unicodeBidi: "normal",
                    visibility: "visible",
                    wrapOption: "noWrap",
                    writingMode: "lrtb",
                    zIndex: "auto"
                };
                this.fontMap = {};
                this.fontMap.default = "Lucida sans typewriter, Lucida console, Consolas";
                this.fontMap.monospaceSerif = "Courier";
                this.fontMap.proportionalSerif = "Times New Roman, Serif";
                this.fontMap.monospaceSansSerif = "Lucida sans typewriter, Lucida console, Consolas";
                this.fontMap.proportionalSansSerif = "Arial, Sans-serif";
                this.fontMap.casual = "Verdana";
                this.fontMap.cursive = "Zapf-Chancery, Segoe script, Cursive";
                this.fontMap.smallCaps = "Arial, Helvetica";
                this.fontMap.monospace = "Lucida sans typewriter, Lucida console, Consolas";
                this.fontMap.sansSerif = "Arial, Sans-serif";
                this.fontMap.serif = "Times New Roman, Serif";
                n && i.extend(this, n)
            }
            return n
        }();
        t.TtmlSettings = r
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t];
    r = function (n, t) {
        "use strict";
        var i = function () {
            function n(n, t) {
                this.mediaFrameRate = n;
                this.mediaTickRate = t
            }
            return n.prototype.parse = function (t) {
                var i, r;
                if (!t) return 0;
                if (i = n.absoluteTimeRegex.exec(t), i && i.length > 3) {
                    var f = 3600 * parseInt(i[1], 10),
                        e = 60 * parseInt(i[2], 10),
                        o = parseInt(i[3], 10),
                        u = 0;
                    return i[5] && (u = 1e3 * parseFloat(i[4])), i[6] && (u = Math.round(parseFloat(i[6]) * this.getTimeUnitMultiplier("f"))), 1e3 * (f + e + o) + u
                }
                return r = n.relativeTimeRegex.exec(t), r && r.length > 3 ? Math.round(parseFloat(r[1]) * this.getTimeUnitMultiplier(r[3])) : 0
            }, n.prototype.getTimeUnitMultiplier = function (n) {
                switch (n) {
                    case "h":
                        return 36e5;
                    case "ms":
                        return 1;
                    case "m":
                        return 6e4;
                    case "s":
                        return 1e3;
                    case "f":
                        return 1e3 / this.mediaFrameRate;
                    case "t":
                        return 1e3 / this.mediaTickRate;
                    default:
                        return 0
                }
            }, n.absoluteTimeRegex = /^(\d{1,}):(\d{2}):(\d{2})((\.\d{1,})|:(\d{2,}(\.\d{1,})?))?$/, n.relativeTimeRegex = /^(\d+(\.\d+)?)(ms|[hmsft])$/, n
        }();
        t.TtmlTimeParser = i
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(2), i(9), i(22), i(11)];
    r = function (n, t, i, r, u, f) {
        "use strict";
        var e = function () {
            function n() {
                var n = this;
                this.triggerEvents = function (t) {
                    n.onMediaEventCallback && n.onMediaEventCallback(t)
                }
            }
            return n.prototype.bindVideoEvents = function () {
                var n, t, i;
                if (this.videoTag)
                    for (n = 0, t = u.MediaEvents; n < t.length; n++) i = t[n], r.addEvents(this.videoTag, i, this.triggerEvents)
            }, n.prototype.unbindVideoEvents = function () {
                var n, t, i;
                if (this.videoTag)
                    for (n = 0, t = u.MediaEvents; n < t.length; n++) i = t[n], r.removeEvents(this.videoTag, i, this.triggerEvents)
            }, n.prototype.load = function (n, t, i, u) {
                n || (console.log("player container is null"), i && i());
                this.videoTag && this.dispose();
                this.playerContainer = n;
                this.onMediaEventCallback = u;
                this.videoTag = r.selectFirstElementT("video", this.playerContainer);
                !this.videoTag && i && (console.log("video tag not found"), i());
                this.bindVideoEvents();
                t && setTimeout(t, 0)
            }, n.prototype.play = function () {
                this.videoTag && this.videoTag.play()
            }, n.prototype.pause = function () {
                this.videoTag && this.videoTag.pause()
            }, n.prototype.isPaused = function () {
                return this.videoTag && this.videoTag.paused
            }, n.prototype.getVolume = function () {
                return this.videoTag ? this.videoTag.volume : 0
            }, n.prototype.setVolume = function (n) {
                this.videoTag && (this.videoTag.volume = n)
            }, n.prototype.isMuted = function () {
                return !!this.videoTag && this.videoTag.muted
            }, n.prototype.mute = function () {
                this.videoTag && (this.videoTag.muted = !0)
            }, n.prototype.unmute = function () {
                this.videoTag && (this.videoTag.muted = !1)
            }, n.prototype.getCurrentTime = function () {
                return this.videoTag ? this.videoTag.currentTime : 0
            }, n.prototype.setCurrentTime = function (n) {
                this.videoTag && (this.videoTag.currentTime = n)
            }, n.prototype.isSeeking = function () {
                return !!this.videoTag && this.videoTag.seeking
            }, n.prototype.getDuration = function () {
                return this.videoTag ? this.videoTag.duration : 0
            }, n.prototype.getBufferedDuration = function () {
                var n = 0;
                return this.videoTag && this.videoTag.buffered && this.videoTag.buffered.length && (n = this.videoTag.buffered.end(this.videoTag.buffered.length - 1)), n
            }, n.prototype.setSource = function (n) {
                if (n && this.videoTag) {
                    var t = this.videoTag.getAttribute("src");
                    n !== t && (this.videoTag.setAttribute("src", n), this.videoTag.load && this.videoTag.load())
                }
            }, n.prototype.clearSource = function () {
                this.videoTag && (this.videoTag.setAttribute("src", ""), this.videoTag.load && this.videoTag.load())
            }, n.prototype.setPosterFrame = function (n) {
                n && this.videoTag && this.videoTag.poster !== n && (this.videoTag.poster = n)
            }, n.prototype.getError = function () {
                var n;
                if (null !== this.videoTag && null !== this.videoTag.error) {
                    switch (this.videoTag.error.code) {
                        case this.videoTag.error.MEDIA_ERR_ABORTED:
                            n = i.VideoErrorCodes.MediaErrorAborted;
                            break;
                        case this.videoTag.error.MEDIA_ERR_NETWORK:
                            n = i.VideoErrorCodes.MediaErrorNetwork;
                            break;
                        case this.videoTag.error.MEDIA_ERR_DECODE:
                            n = i.VideoErrorCodes.MediaErrorDecode;
                            break;
                        case this.videoTag.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                            n = i.VideoErrorCodes.MediaErrorSourceNotSupported;
                            break;
                        default:
                            n = i.VideoErrorCodes.MediaErrorUnknown
                    }
                    return {
                        errorCode: n
                    }
                }
                return null
            }, n.prototype.setPlaybackRate = function (n) {
                this.videoTag && n && f.isNumber(n) && (this.videoTag.playbackRate = n)
            }, n.prototype.getPlayerTechName = function () {
                return "html5"
            }, n.prototype.getWrapperName = function () {
                return "html5video"
            }, n.prototype.dispose = function () {
                this.unbindVideoEvents();
                this.clearSource()
            }, n
        }();
        t.Html5VideoWrapper = e
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t];
    r = function (n, t) {
        "use strict";
        t.MediaEvents = ["abort", "canplay", "canplaythrough", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "readystatechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"];
        t.PlayerEvents = {
            CommonPlayerImpression: "CommonPlayerImpression",
            PlaybackStatusChanged: "PlaybackStatusChanged",
            Replay: "Replay",
            BufferComplete: "BufferComplete",
            ContentStart: "ContentStart",
            ContentError: "ContentError",
            ContentContinue: "ContentContinue",
            ContentComplete: "ContentComplete",
            ContentCheckpoint: "ContentCheckpoint",
            ContentLoaded3PP: "ContentLoaded3PP",
            Pause: "Pause",
            Resume: "Resume",
            Seek: "Seek",
            VideoQualityChanged: "VideoQualityChanged",
            Mute: "Mute",
            Unmute: "Unmute",
            InfoPaneOpened: "InfoPaneOpened",
            VideoTimedout: "VideoTimedout",
            VideoTimeUpdate: "VideoTimeUpdate",
            FullScreenEnter: "FullScreenEnter",
            FullScreenExit: "FullScreenExit",
            UserInteracted: "VideoUserInteracted"
        };
        t.PlaybackStatus = {
            Ready: "Ready",
            Loading: "Loading",
            Loaded: "Loaded",
            LoadFailed: "LoadFailed",
            PlaybackCompleted: "PlaybackCompleted",
            Playbackerrored: "PlaybackErrored",
            VideoOpening: "VideoOpening",
            VideoPlaying: "VideoPlaying",
            VideoBuffering: "VideoBuffering",
            VideoPaused: "VideoPaused",
            VideoPlayCompleted: "VideoPlayCompleted",
            VideoPlayFailed: "VideoPlayFailed",
            VideoClosed: "VideoClosed"
        };
        t.shareTypes = {
            facebook: "facebook",
            twitter: "twitter",
            linkedin: "linkedin",
            skype: "skype",
            mail: "mail",
            copy: "copy"
        }
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(2), i(9), i(22), i(24), i(11), i(1)];
    r = function (n, t, i, r, u, f, e, o) {
        "use strict";
        var s = function () {
            function n() {
                var t = this;
                this.ampPlayer = null;
                this.triggerEvents = function (n) {
                    t.onMediaEventCallback && t.onMediaEventCallback(n)
                };
                this.setupAmpPlayer = function () {
                    var n = r.selectFirstElementT("video", t.playerContainer);
                    n || (console.log("could not find video tag"), t.onLoadFailedCallback && t.onLoadFailedCallback());
                    t.ampPlayer = window.amp(n, {
                        nativeControlsForTouch: !1,
                        autoplay: !1,
                        controls: !1
                    }, t.onAmpPlayerInit);
                    t.bindVideoEvents();
                    t.onLoadedCallback && t.onLoadedCallback()
                };
                this.onAmpPlayerInit = function () {
                    var n = r.selectFirstElement(".f-video-player", t.playerContainer);
                    n && n.removeAttribute("style")
                };
                n.isAmpScriptLoaded() || f.PlayerUtility.loadScript(o.PlayerConfig.ampUrl)
            }
            return n.isAmpScriptLoaded = function () {
                return window && window.amp
            }, n.prototype.bindVideoEvents = function () {
                var n, t, i;
                if (this.ampPlayer)
                    for (n = 0, t = u.MediaEvents; n < t.length; n++) i = t[n], this.ampPlayer.addEventListener(i, this.triggerEvents)
            }, n.prototype.unbindVideoEvents = function () {
                var n, t, i;
                if (this.ampPlayer)
                    for (n = 0, t = u.MediaEvents; n < t.length; n++) i = t[n], this.ampPlayer.removeEventListener(i, this.triggerEvents)
            }, n.prototype.load = function (t, i, r, u) {
                t || (console.log("player container is null"), r && r());
                this.ampPlayer && this.dispose();
                this.playerContainer = t;
                this.onMediaEventCallback = u;
                this.onLoadedCallback = i;
                this.onLoadFailedCallback = r;
                e.poll(n.isAmpScriptLoaded, n.pollingInterval, n.pollingTimeout, this.setupAmpPlayer, this.onLoadFailedCallback)
            }, n.prototype.play = function () {
                this.ampPlayer && this.ampPlayer.play()
            }, n.prototype.pause = function () {
                this.ampPlayer && this.ampPlayer.pause()
            }, n.prototype.isPaused = function () {
                return this.ampPlayer && this.ampPlayer.paused()
            }, n.prototype.getVolume = function () {
                return this.ampPlayer ? this.ampPlayer.volume() : 0
            }, n.prototype.setVolume = function (n) {
                this.ampPlayer && this.ampPlayer.volume(n)
            }, n.prototype.isMuted = function () {
                return !!this.ampPlayer && this.ampPlayer.muted()
            }, n.prototype.mute = function () {
                this.ampPlayer && this.ampPlayer.muted(!0)
            }, n.prototype.unmute = function () {
                this.ampPlayer && this.ampPlayer.muted(!1)
            }, n.prototype.getCurrentTime = function () {
                return this.ampPlayer ? this.ampPlayer.currentTime() : 0
            }, n.prototype.setCurrentTime = function (n) {
                this.ampPlayer && this.ampPlayer.currentTime(n)
            }, n.prototype.isSeeking = function () {
                return !!this.ampPlayer && this.ampPlayer.seeking()
            }, n.prototype.getDuration = function () {
                return this.ampPlayer ? this.ampPlayer.duration() : 0
            }, n.prototype.getBufferedDuration = function () {
                var t = 0,
                    n;
                return this.ampPlayer && this.ampPlayer.buffered && this.ampPlayer.buffered().length && (n = this.ampPlayer.buffered(), n.length && (t = n.end(n.length - 1))), t
            }, n.prototype.setSource = function (n, t) {
                var r, u;
                if (n && this.ampPlayer && this.ampPlayer.currentSrc() !== n) {
                    r = "video/mp4";
                    switch (t) {
                        case i.MediaTypes.HLS:
                            r = "application/vnd.apple.mpegurl";
                            break;
                        case i.MediaTypes.DASH:
                            r = "application/dash-xml";
                            break;
                        case i.MediaTypes.SMOOTH:
                            r = "application/vnd.ms-sstr+xml"
                    }
                    u = {
                        src: n,
                        type: r
                    };
                    this.ampPlayer.src([u])
                }
            }, n.prototype.clearSource = function () { }, n.prototype.setPosterFrame = function (n) {
                n && this.ampPlayer && this.ampPlayer.poster() !== n && this.ampPlayer.poster(n)
            }, n.prototype.getError = function () {
                var n = this.ampPlayer && this.ampPlayer.error(),
                    r, t;
                return n ? (t = window, r = n.code & t.amp.errorCode.abortedErrStart ? i.VideoErrorCodes.MediaErrorAborted : n.code & t.amp.errorCode.networkErrStart ? i.VideoErrorCodes.MediaErrorNetwork : n.code & t.amp.errorCode.decodeErrStart ? i.VideoErrorCodes.MediaErrorDecode : n.code & t.amp.errorCode.srcErrStart ? i.VideoErrorCodes.MediaErrorSourceNotSupported : n.code & t.amp.errorCode.encryptErrStart ? i.VideoErrorCodes.AmpEncryptError : n.code & t.amp.errorCode.srcPlayerMismatchStart ? i.VideoErrorCodes.AmpPlayerMismatch : i.VideoErrorCodes.MediaErrorUnknown, {
                    errorCode: r,
                    message: "AMP Error Code: " + n.code
                }) : null
            }, n.prototype.setPlaybackRate = function () { }, n.prototype.getPlayerTechName = function () {
                return this.ampPlayer && this.ampPlayer.currentTechName()
            }, n.prototype.getWrapperName = function () {
                return "amp"
            }, n.prototype.dispose = function () {
                this.clearSource();
                this.unbindVideoEvents();
                this.ampPlayer && this.ampPlayer.dispose && this.ampPlayer.dispose();
                this.ampPlayer = null
            }, n.pollingInterval = 50, n.pollingTimeout = 3e3, n
        }();
        t.AmpWrapper = s
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(10), i(2)];
    r = function (n, t, i, r) {
        "use strict";
        var u = function () {
            function n() { }
            return n.random4CharString = function () {
                return (1 + Math.random()).toString(32).substring(1)
            }, n.loadScript = function (n) {
                var i = document.getElementsByTagName("script")[0],
                    t = document.createElement("script");
                t.src = n;
                t.async = !0;
                t.onload = t.onreadystatechange = function () {
                    t.readyState && "loaded" !== t.readyState && "complete" !== t.readyState || (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t))
                };
                i.parentNode.insertBefore(t, i)
            }, n.formatContentErrorMessage = function (n, t, u) {
                var f = i.format("[CE{0}]: {1}", r.VideoErrorCodes[n], t);
                return u && (f += i.format("; (Additional: {0})", u)), f
            }, n.logConsoleMessage = function (t, r) {
                void 0 === r && (r = "VideoPlayer");
                var u = i.format("[{0}][{1}] {2}", n.toLogTime(new Date), r, t);
                "object" == typeof console && console.log && console.log(u)
            }, n.toLogTime = function (n) {
                n || (n = new Date);
                var t = n.getHours(),
                    i = n.getMinutes(),
                    r = n.getSeconds();
                return t = t < 10 ? "0" + t : t, i = i < 10 ? "0" + i : i, r = r < 10 ? "0" + r : r, t + ":" + i + ":" + r
            }, n
        }();
        t.PlayerUtility = u
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t];
    r = function (n, t) {
        "use strict";
        var i = function () {
            function n() {
                this.timestamp = null;
                this.timeValue = null;
                this.firstValue = null;
                this.totalValue = null;
                this.intervals = null
            }
            return n.prototype.start = function () {
                this.timestamp || (this.timestamp = new Date, this.intervals++)
            }, n.prototype.stop = function () {
                if (this.timestamp) {
                    var n = (new Date).valueOf() - this.timestamp.valueOf();
                    this.timeValue += n;
                    this.totalValue += n;
                    this.firstValue || (this.firstValue = this.timeValue);
                    this.timestamp = null
                }
            }, n.prototype.reset = function () {
                this.timestamp = null;
                this.timeValue = this.intervals = this.firstValue = this.totalValue = 0
            }, n.prototype.isStarted = function () {
                return !!this.intervals
            }, n.prototype.isStopped = function () {
                return !!this.timestamp
            }, n.prototype.hasReached = function (n) {
                return this.getValue() >= n && (this.timestamp && (this.totalValue += (new Date).valueOf() - this.timestamp.valueOf(), this.timestamp = new Date), this.timeValue = 0, this.intervals = 0, !0)
            }, n.prototype.getValue = function () {
                var n = this.timeValue;
                return this.timestamp && (n += (new Date).valueOf() - this.timestamp.valueOf()), n
            }, n.prototype.getTotalValue = function () {
                var n = this.totalValue;
                return this.timestamp && (n += (new Date).valueOf() - this.timestamp.valueOf()), n
            }, n.prototype.getFirstValue = function () {
                return this.firstValue
            }, n.prototype.getIntervals = function () {
                return this.intervals
            }, n
        }();
        t.Stopwatch = i
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r, f = this && this.__extends || function (n, t) {
        function r() {
            this.constructor = n
        }
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    };
    u = [i, t, i(27), i(11)];
    r = function (n, t, i, r) {
        "use strict";
        var u = function (n) {
            function t(t) {
                n.call(this, t)
            }
            return f(t, n), t.prototype.doPing = function (n, t, i, u) {
                var f = this.getDefaultParams(n, i);
                r.extend(f, u);
                this.log("jsll - t: " + f.t + " behavior : " + t + " data : " + JSON.stringify(f));
                var o = {
                    videoObj: f
                },
                    s = {
                        behavior: t,
                        pageTags: o
                    },
                    e = window;
                e.awa && e.awa.ct && e.awa.ct.captureContentUpdate(s)
            }, t.prototype.getDefaultParams = function (n, t) {
                var i = {};
                return t && r.extend(i, t), n && (r.extend(i, {
                    d: n.videoDuration,
                    piid: n.playerInstanceId,
                    plt: n.playerType,
                    ptech: n.playerTechnology,
                    size: n.videoSize ? n.videoSize.width + "x" + n.videoSize.height : null,
                    vt: n.playerType,
                    te: n.videoElapsedTime
                }), n.currentVideoFile && r.extend(i, {
                    vfc: n.currentVideoFile.formatCode
                }), n.videoMetadata && r.extend(i, {
                    eid: n.videoMetadata.videoId,
                    vtitle: n.videoMetadata.title
                })), i
            }, t.prototype.onCommonPlayerImpression = function (n) {
                this.log("jsll - OnCommonPlayerImpression()");
                this.doPing(n, null, t.usageCounters.commonPlayerImpression)
            }, t.prototype.onBufferComplete = function (n) {
                this.log("jsll - OnBufferComplete()");
                var i = {
                    bd: n.totalBufferWaitTime
                },
                    r = window.awa ? window.awa.behavior.VIDEOBUFFERING : null;
                this.doPing(n, r, t.usageCounters.contentBuffering, i)
            }, t.prototype.onContentStart = function (n) {
                this.log("jsll - OnContentStart()");
                var i = window.awa ? window.awa.behavior.VIDEOSTART : null;
                this.doPing(n, i, t.usageCounters.contentStart)
            }, t.prototype.onContentContinue = function (n) {
                this.log("jsll - OnContentContinue()");
                var i = window.awa ? window.awa.behavior.VIDEOCONTINUE : null;
                this.doPing(n, i, t.usageCounters.contentContinue)
            }, t.prototype.onContentCheckpoint = function (n) {
                this.log("jsll - OnContentCheckpoint()");
                var t = {
                    cp: n.checkpoint
                },
                    i = window.awa ? window.awa.behavior.VIDEOCHECKPOINT : null;
                this.doPing(n, i, null, t)
            }, t.prototype.onContentComplete = function (n) {
                this.log("jsll - OnContentComplete()");
                var i = window.awa ? window.awa.behavior.VIDEOCOMPLETE : null;
                this.doPing(n, i, t.usageCounters.contentComplete)
            }, t.prototype.onContentError = function (n) {
                this.log("jsll - OnContentError()");
                var i = {
                    fi: n.currentVideoFile && n.currentVideoFile.url,
                    et: n.errorType,
                    etd: n.errorDesc
                },
                    r = window.awa ? window.awa.behavior.VIDEOERROR : null;
                this.doPing(n, r, t.usageCounters.contentError, i)
            }, t.prototype.onMute = function (n) {
                this.log("jsll - OnMute()");
                var i = window.awa ? window.awa.behavior.VIDEOMUTE : null;
                this.doPing(n, i, t.usageCounters.mute)
            }, t.prototype.onUnmute = function (n) {
                this.log("jsll - OnMute()");
                var i = window.awa ? window.awa.behavior.VIDEOUNMUTE : null;
                this.doPing(n, i, t.usageCounters.unmute)
            }, t.prototype.onPause = function (n) {
                this.log("jsll - OnPause()");
                var i = window.awa ? window.awa.behavior.VIDEOPAUSE : null;
                this.doPing(n, i, t.usageCounters.pause)
            }, t.prototype.onSeek = function (n) {
                if (n.seekFrom !== n.seekTo) {
                    this.log("jsll - OnSeek()");
                    var i = {
                        te: n.seekFrom,
                        st: n.seekTo
                    },
                        r = window.awa ? window.awa.behavior.VIDEOJUMP : null;
                    this.doPing(n, r, t.usageCounters.seek, i)
                }
            }, t.prototype.onVideoQualityChanged = function (n) {
                this.log("jsll - OnVideoQualityChanged()");
                var i = {
                    q: n.currentVideoFile.quality
                };
                this.doPing(n, null, t.usageCounters.videoQuality, i)
            }, t.prototype.onFullScreenEnter = function (n) {
                this.log("jsll - OnFullScreenEnter()");
                var i = window.awa ? window.awa.behavior.VIDEOFULLSCREEN : null;
                this.doPing(n, i, t.usageCounters.fullScreenEnter)
            }, t.prototype.onFullScreenExit = function (n) {
                this.log("jsll - OnFullScreenExit()");
                var i = window.awa ? window.awa.behavior.VIDEOUNFULLSCREEN : null;
                this.doPing(n, i, t.usageCounters.fullScreenExit)
            }, t.prototype.onReplay = function (n) {
                this.log("jsll - OnReplay()");
                this.doPing(n, null, t.usageCounters.replay)
            }, t.prototype.onResume = function (n) {
                this.log("jsll - OnResume()");
                this.doPing(n, null, t.usageCounters.resume)
            }, t.prototype.on3ppVideoLoaded = function (n) {
                this.log("jsll - On3ppVideoLoaded()");
                this.doPing(n, null, t.usageCounters.contentImpression3PP)
            }, t.usageCounters = {
                contentBuffering: {
                    t: "2",
                    evt: "ContentPlay"
                },
                contentError: {
                    t: "20",
                    evt: "ContentPlay"
                },
                contentStart: {
                    t: "21",
                    evt: "ContentPlay"
                },
                contentContinue: {
                    t: "22",
                    evt: "ContentPlay"
                },
                contentComplete: {
                    t: "23",
                    evt: "ContentPlay"
                },
                contentImpression3PP: {
                    t: "41",
                    evt: "ContentPlay"
                },
                commonPlayerImpression: {
                    t: "61",
                    evt: "ContentPlay"
                },
                cc: {
                    t: "30",
                    evt: "Click_Non-nav"
                },
                pause: {
                    t: "31",
                    evt: "Click_Non-nav"
                },
                seek: {
                    t: "32",
                    evt: "Click_Non-nav"
                },
                mute: {
                    t: "33",
                    evt: "Click_Non-nav"
                },
                fullScreenEnter: {
                    t: "34",
                    evt: "Click_Non-nav"
                },
                info: {
                    t: "35",
                    evt: "Click_Non-nav"
                },
                videoQuality: {
                    t: "36",
                    evt: "Click_Non-nav"
                },
                resume: {
                    t: "37",
                    evt: "Click_Non-nav"
                },
                fullScreenExit: {
                    t: "38",
                    evt: "Click_Non-nav"
                },
                replay: {
                    t: "39",
                    evt: "Click_Non-nav"
                },
                unmute: {
                    t: "40",
                    evt: "Click_Non-nav"
                },
                facebook: {
                    t: "51",
                    evt: "Click_Non-nav"
                },
                twitter: {
                    t: "52",
                    evt: "Click_Non-nav"
                },
                email: {
                    t: "53",
                    evt: "Click_Non-nav"
                }
            }, t
        }(i.Reporter);
        t.JsllReporter = u
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(22), i(24)];
    r = function (n, t, i, r) {
        "use strict";
        var u = function () {
            function n(n) {
                this.videoComponent = n;
                this.isDebugMode = !1;
                n && "true" === n.getAttribute("data-debug") && (this.isDebugMode = !0)
            }
            return n.prototype.reportEvent = function (n, t) {
                if (n) switch (n) {
                    case i.PlayerEvents.CommonPlayerImpression:
                        this.onCommonPlayerImpression(t);
                        break;
                    case i.PlayerEvents.Replay:
                        this.onReplay(t);
                        break;
                    case i.PlayerEvents.BufferComplete:
                        this.onBufferComplete(t);
                        break;
                    case i.PlayerEvents.ContentStart:
                        this.onContentStart(t);
                        break;
                    case i.PlayerEvents.ContentError:
                        this.onContentError(t);
                        break;
                    case i.PlayerEvents.ContentContinue:
                        this.onContentContinue(t);
                        break;
                    case i.PlayerEvents.ContentComplete:
                        this.onContentComplete(t);
                        break;
                    case i.PlayerEvents.ContentCheckpoint:
                        this.onContentCheckpoint(t);
                        break;
                    case i.PlayerEvents.ContentLoaded3PP:
                        this.on3ppVideoLoaded(t);
                        break;
                    case i.PlayerEvents.Pause:
                        this.onPause(t);
                        break;
                    case i.PlayerEvents.Resume:
                        this.onResume(t);
                        break;
                    case i.PlayerEvents.Seek:
                        this.onSeek(t);
                        break;
                    case i.PlayerEvents.VideoQualityChanged:
                        this.onVideoQualityChanged(t);
                        break;
                    case i.PlayerEvents.Mute:
                        this.onMute(t);
                        break;
                    case i.PlayerEvents.Unmute:
                        this.onUnmute(t);
                        break;
                    case i.PlayerEvents.FullScreenEnter:
                        this.onFullScreenEnter(t);
                        break;
                    case i.PlayerEvents.FullScreenExit:
                        this.onFullScreenExit(t)
                }
            }, n.prototype.log = function (n, t) {
                void 0 === t && (t = "Reporter");
                this.isDebugMode && r.PlayerUtility.logConsoleMessage(n, t)
            }, n
        }();
        t.Reporter = u
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(9), i(15), i(22)];
    r = function (n, t, i, r, u) {
        "use strict";
        var f = {
            "zh-cn": [u.shareTypes.facebook, u.shareTypes.twitter, u.shareTypes.linkedin, u.shareTypes.skype]
        },
            e = function () {
                function n() { }
                return n.getCurrentPageUrl = function () {
                    var t = parent !== window,
                        n = window.location.href;
                    return t && (n = document.referrer), n
                }, n.tryCopyTextToClipboard = function (n) {
                    var t, r;
                    if (window.clipboardData) window.clipboardData.setData("text", n);
                    else {
                        t = document.createElement("textarea");
                        i.css(t, "position", "absolute");
                        i.css(t, "left", "-500px");
                        i.css(t, "top", "-500px");
                        t.value = n;
                        r = i.selectFirstElement("body");
                        r.appendChild(t);
                        t.select();
                        try {
                            document.execCommand("copy")
                        } catch (n) { }
                        t.remove()
                    }
                }, n.getShareOptionsData = function (t, i, e) {
                    var o;
                    if (!(i && i.share && i.shareOptions && t)) return null;
                    for (var s = [], h = encodeURIComponent(e || n.getCurrentPageUrl()), c = 0, l = i.shareOptions; c < l.length; c++)
                        if (o = l[c], o = o.toLowerCase(), !(i.market && f[i.market] && f[i.market].indexOf(o) >= 0)) switch (o) {
                            case u.shareTypes.facebook:
                                s.push({
                                    url: "//www.facebook.com/share.php?u=" + h,
                                    id: o,
                                    label: t.getLocalizedValue(r.playerLocKeys.sharing_facebook),
                                    image: "data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bdisplay%3Anone%3B%7D.st1%7Bdisplay%3Ainline%3B%7D.st2%7Bfill%3Anone%3B%7D.st3%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%20id%3D%22Rest_3_%22%20class%3D%22st0%22%3E%3Cg%20id%3D%22Twitter_3_%22%20class%3D%22st1%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M28.4%2C8.6c-0.9%2C0.4-1.9%2C0.7-2.9%2C0.8c1-0.6%2C1.8-1.6%2C2.2-2.8c-1%2C0.6-2.1%2C1-3.2%2C1.2c-0.9-1-2.2-1.6-3.7-1.6c-2.8%2C0-5%2C2.3-5%2C5c0%2C0.4%2C0%2C0.8%2C0.1%2C1.2C11.7%2C12.2%2C8%2C10.2%2C5.5%2C7.1C5.1%2C7.9%2C4.8%2C8.8%2C4.8%2C9.7c0%2C1.8%2C1%2C3.3%2C2.3%2C4.2c-0.8%2C0-2.2-0.3-2.2-0.6c0%2C0%2C0%2C0%2C0%2C0.1c0%2C2.4%2C1.6%2C4.5%2C3.9%2C5c-0.4%2C0.1-0.9%2C0.2-1.4%2C0.2c-0.3%2C0-0.7%2C0-1-0.1c0.6%2C2%2C2.5%2C3.5%2C4.7%2C3.5c-1.5%2C1.2-3.7%2C2-6.1%2C2c-0.4%2C0-0.8%2C0-1.2-0.1c2.2%2C1.4%2C4.9%2C2.3%2C7.7%2C2.3c9.3%2C0%2C14.4-7.7%2C14.4-14.4c0-0.2%2C0-0.4%2C0-0.7C26.9%2C10.5%2C27.7%2C9.6%2C28.4%2C8.6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer_2%22%20class%3D%22st0%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Facebook_7_%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22White_2_%22%20class%3D%22st3%22%20d%3D%22M30.2%2C0H1.8C0.8%2C0%2C0%2C0.8%2C0%2C1.8v28.5c0%2C1%2C0.8%2C1.8%2C1.8%2C1.8h15.3V19.6h-4.2v-4.8h4.2v-3.6c0-4.1%2C2.5-6.4%2C6.2-6.4C25.1%2C4.8%2C26.6%2C5%2C27%2C5v4.3l-2.6%2C0c-2%2C0-2.4%2C1-2.4%2C2.4v3.1h4.8l-0.6%2C4.8h-4.2V32h8.2c1%2C0%2C1.8-0.8%2C1.8-1.8V1.8C32%2C0.8%2C31.2%2C0%2C30.2%2C0z%22%2F%3E%3C%2Fsvg%3E"
                                });
                                break;
                            case u.shareTypes.twitter:
                                s.push({
                                    url: "//twitter.com/share?url=" + h + "&text=",
                                    id: o,
                                    label: t.getLocalizedValue(r.playerLocKeys.sharing_twitter),
                                    image: "data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M32%2C6.1c-1.2%2C0.5-2.5%2C0.9-3.8%2C1c1.3-0.8%2C2.3-2.1%2C2.9-3.6c-1.3%2C0.8-2.7%2C1.3-4.2%2C1.6C25.8%2C3.8%2C24.1%2C3%2C22.1%2C3c-3.6%2C0-6.5%2C3-6.5%2C6.5c0%2C0.5%2C0%2C1%2C0.1%2C1.6C10.3%2C10.8%2C5.5%2C8.2%2C2.2%2C4.2c-0.5%2C1-0.9%2C2.2-0.9%2C3.4c0%2C2.3%2C1.3%2C4.3%2C3%2C5.5c-1%2C0-2.9-0.4-2.9-0.8c0%2C0%2C0%2C0%2C0%2C0.1c0%2C3.1%2C2.1%2C5.9%2C5.1%2C6.5C6%2C19%2C5.3%2C19.1%2C4.7%2C19.1c-0.4%2C0-0.9%2C0-1.3-0.1c0.8%2C2.6%2C3.3%2C4.6%2C6.1%2C4.6c-2%2C1.6-4.8%2C2.6-7.9%2C2.6c-0.5%2C0-1%2C0-1.6-0.1c2.9%2C1.8%2C6.4%2C3%2C10%2C3c12.1%2C0%2C18.7-10%2C18.7-18.7c0-0.3%2C0-0.5%2C0-0.9C30%2C8.6%2C31.1%2C7.4%2C32%2C6.1z%22%2F%3E%3Cg%20id%3D%22Layer_2%22%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                });
                                break;
                            case u.shareTypes.skype:
                                s.push({
                                    url: "//web.skype.com/share?url=" + h + "&amp;lang=" + i.market,
                                    id: o,
                                    label: t.getLocalizedValue(r.playerLocKeys.sharing_skype),
                                    image: "data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bdisplay%3Anone%3B%7D.st1%7Bdisplay%3Ainline%3B%7D.st2%7Bfill%3Anone%3B%7D.st3%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%20id%3D%22Layer_1_1_%22%20class%3D%22st0%22%3E%3Cg%20id%3D%22Rest_3_%22%20class%3D%22st1%22%3E%3Cg%20id%3D%22Twitter_3_%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M28.4%2C8.6c-0.9%2C0.4-1.9%2C0.7-2.9%2C0.8c1-0.6%2C1.8-1.6%2C2.2-2.8c-1%2C0.6-2.1%2C1-3.2%2C1.2c-0.9-1-2.2-1.6-3.7-1.6c-2.8%2C0-5%2C2.3-5%2C5c0%2C0.4%2C0%2C0.8%2C0.1%2C1.2C11.7%2C12.2%2C8%2C10.2%2C5.5%2C7.1C5.1%2C7.9%2C4.8%2C8.8%2C4.8%2C9.7c0%2C1.8%2C1%2C3.3%2C2.3%2C4.2c-0.8%2C0-2.2-0.3-2.2-0.6c0%2C0%2C0%2C0%2C0%2C0.1c0%2C2.4%2C1.6%2C4.5%2C3.9%2C5c-0.4%2C0.1-0.9%2C0.2-1.4%2C0.2c-0.3%2C0-0.7%2C0-1-0.1c0.6%2C2%2C2.5%2C3.5%2C4.7%2C3.5c-1.5%2C1.2-3.7%2C2-6.1%2C2c-0.4%2C0-0.8%2C0-1.2-0.1c2.2%2C1.4%2C4.9%2C2.3%2C7.7%2C2.3c9.3%2C0%2C14.4-7.7%2C14.4-14.4c0-0.2%2C0-0.4%2C0-0.7C26.9%2C10.5%2C27.7%2C9.6%2C28.4%2C8.6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer_2%22%20class%3D%22st1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Facebook_7_%22%20class%3D%22st1%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20id%3D%22f_6_%22%20class%3D%22st3%22%20d%3D%22M18%2C26v-9h2.6l0.5-4H18v-1.9c0-1-0.2-2.1%2C1.3-2.1H21V6.1c0%2C0-1.3-0.1-2.6-0.1C15.7%2C6%2C14%2C7.7%2C14%2C10.7V13h-3v4h3v9H18z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M30.9%2C18.6C31%2C17.8%2C31%2C16.8%2C31%2C16c0-8.3-6.7-15-15-15c-1%2C0-1.8%2C0-2.6%2C0.2C12.2%2C0.3%2C10.6%2C0%2C9%2C0C4%2C0%2C0%2C4%2C0%2C9c0%2C1.6%2C0.5%2C3.2%2C1.1%2C4.5C1%2C14.2%2C1%2C15.2%2C1%2C16c0%2C8.3%2C6.7%2C15%2C15%2C15c1%2C0%2C1.8%2C0%2C2.6-0.2c1.3%2C0.8%2C2.9%2C1.1%2C4.5%2C1.1c5%2C0%2C9-4%2C9-9C32%2C21.3%2C31.7%2C19.8%2C30.9%2C18.6z%20M16.2%2C25.1c-5.1%2C0-7.5-2.6-7.5-4.5c0-1%2C0.8-1.6%2C1.8-1.6c2.2%2C0%2C1.6%2C3.2%2C5.8%2C3.2c2.1%2C0%2C3.4-1.3%2C3.4-2.4c0-0.6-0.5-1.4-1.8-1.8L13.1%2C17c-3.7-1-4.3-3-4.3-4.8c0-3.8%2C3.5-5.3%2C7-5.3c3.2%2C0%2C6.9%2C1.8%2C6.9%2C4.2c0%2C1-0.8%2C1.6-1.8%2C1.6c-1.9%2C0-1.6-2.6-5.3-2.6c-1.9%2C0-2.9%2C0.8-2.9%2C2.1s1.4%2C1.6%2C2.7%2C1.9l3.4%2C0.8c3.7%2C0.8%2C4.6%2C3%2C4.6%2C5.1C23.5%2C22.7%2C21%2C25.1%2C16.2%2C25.1z%22%2F%3E%3C%2Fsvg%3E"
                                });
                                break;
                            case u.shareTypes.linkedin:
                                s.push({
                                    url: "//www.linkedin.com/shareArticle?mini=true&url=" + h + "&title=&summary=&source=",
                                    id: o,
                                    label: t.getLocalizedValue(r.playerLocKeys.sharing_linkedin),
                                    image: "data:image/svg+xml;charset=utf-8,%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2032%2032%22%20style%3D%22enable-background%3Anew%200%200%2032%2032%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bdisplay%3Anone%3B%7D.st1%7Bdisplay%3Ainline%3B%7D.st2%7Bfill%3Anone%3B%7D.st3%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%20id%3D%22Layer_1_1_%22%20class%3D%22st0%22%3E%3Cg%20id%3D%22Rest_3_%22%20class%3D%22st1%22%3E%3Cg%20id%3D%22Twitter_3_%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M28.4%2C8.6c-0.9%2C0.4-1.9%2C0.7-2.9%2C0.8c1-0.6%2C1.8-1.6%2C2.2-2.8c-1%2C0.6-2.1%2C1-3.2%2C1.2c-0.9-1-2.2-1.6-3.7-1.6c-2.8%2C0-5%2C2.3-5%2C5c0%2C0.4%2C0%2C0.8%2C0.1%2C1.2C11.7%2C12.2%2C8%2C10.2%2C5.5%2C7.1C5.1%2C7.9%2C4.8%2C8.8%2C4.8%2C9.7c0%2C1.8%2C1%2C3.3%2C2.3%2C4.2c-0.8%2C0-2.2-0.3-2.2-0.6c0%2C0%2C0%2C0%2C0%2C0.1c0%2C2.4%2C1.6%2C4.5%2C3.9%2C5c-0.4%2C0.1-0.9%2C0.2-1.4%2C0.2c-0.3%2C0-0.7%2C0-1-0.1c0.6%2C2%2C2.5%2C3.5%2C4.7%2C3.5c-1.5%2C1.2-3.7%2C2-6.1%2C2c-0.4%2C0-0.8%2C0-1.2-0.1c2.2%2C1.4%2C4.9%2C2.3%2C7.7%2C2.3c9.3%2C0%2C14.4-7.7%2C14.4-14.4c0-0.2%2C0-0.4%2C0-0.7C26.9%2C10.5%2C27.7%2C9.6%2C28.4%2C8.6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer_2%22%20class%3D%22st1%22%3E%3C%2Fg%3E%3Cg%20id%3D%22Facebook_7_%22%20class%3D%22st1%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20id%3D%22f_6_%22%20class%3D%22st3%22%20d%3D%22M18%2C26v-9h2.6l0.5-4H18v-1.9c0-1-0.2-2.1%2C1.3-2.1H21V6.1c0%2C0-1.3-0.1-2.6-0.1C15.7%2C6%2C14%2C7.7%2C14%2C10.7V13h-3v4h3v9H18z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20id%3D%22Layer_3%22%20class%3D%22st0%22%3E%3Cg%20id%3D%22Skype_7_%22%20class%3D%22st1%22%3E%3Crect%20class%3D%22st2%22%20width%3D%2232%22%20height%3D%2232%22%2F%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M25.2%2C17.6c0.1-0.5%2C0.1-1.1%2C0.1-1.6c0-5.2-4.2-9.4-9.4-9.4c-0.6%2C0-1.1%2C0-1.6%2C0.1C13.5%2C6.2%2C12.5%2C6%2C11.5%2C6c-3.1%2C0-5.6%2C2.5-5.6%2C5.6c0%2C1%2C0.3%2C2%2C0.7%2C2.8c-0.1%2C0.5-0.1%2C1.1-0.1%2C1.6c0%2C5.2%2C4.2%2C9.4%2C9.4%2C9.4c0.6%2C0%2C1.1%2C0%2C1.6-0.1c0.8%2C0.5%2C1.8%2C0.7%2C2.8%2C0.7c3.1%2C0%2C5.6-2.5%2C5.6-5.6C25.9%2C19.3%2C25.7%2C18.4%2C25.2%2C17.6z%20M16%2C21.7c-3.2%2C0-4.7-1.6-4.7-2.8c0-0.6%2C0.5-1%2C1.1-1c1.4%2C0%2C1%2C2%2C3.6%2C2c1.3%2C0%2C2.1-0.8%2C2.1-1.5c0-0.4-0.3-0.9-1.1-1.1l-2.9-0.7c-2.3-0.6-2.7-1.9-2.7-3c0-2.4%2C2.2-3.3%2C4.4-3.3c2%2C0%2C4.3%2C1.1%2C4.3%2C2.6c0%2C0.6-0.5%2C1-1.1%2C1c-1.2%2C0-1-1.6-3.3-1.6c-1.2%2C0-1.8%2C0.5-1.8%2C1.3s0.9%2C1%2C1.7%2C1.2l2.1%2C0.5c2.3%2C0.5%2C2.9%2C1.9%2C2.9%2C3.2C20.6%2C20.2%2C19%2C21.7%2C16%2C21.7z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%3E%3Cg%3E%3Cpath%20class%3D%22st3%22%20d%3D%22M29.6%2C0H2.4C1.1%2C0%2C0%2C1%2C0%2C2.3v27.4C0%2C31%2C1.1%2C32%2C2.4%2C32h27.3c1.3%2C0%2C2.4-1%2C2.4-2.3V2.3C32%2C1%2C30.9%2C0%2C29.6%2C0z%20M9.5%2C27.3H4.7V12h4.7V27.3z%20M7.1%2C9.9c-1.5%2C0-2.8-1.2-2.8-2.8c0-1.5%2C1.2-2.8%2C2.8-2.8c1.5%2C0%2C2.8%2C1.2%2C2.8%2C2.8C9.9%2C8.7%2C8.6%2C9.9%2C7.1%2C9.9z%20M27.3%2C27.3h-4.7v-7.4c0-1.8%2C0-4-2.5-4c-2.5%2C0-2.8%2C1.9-2.8%2C3.9v7.6h-4.7V12H17v2.1h0.1c0.6-1.2%2C2.2-2.5%2C4.5-2.5c4.8%2C0%2C5.7%2C3.2%2C5.7%2C7.3V27.3z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                                });
                                break;
                            case u.shareTypes.mail:
                                s.push({
                                    url: "mailto:?subject=Check out this great video&body=" + h,
                                    id: o,
                                    label: t.getLocalizedValue(r.playerLocKeys.sharing_mail),
                                    glyph: "glyph-mail"
                                });
                                break;
                            case u.shareTypes.copy:
                                s.push({
                                    url: h,
                                    id: o,
                                    label: t.getLocalizedValue(r.playerLocKeys.sharing_copy),
                                    glyph: "glyph-copy"
                                })
                        }
                    return s
                }, n
            }();
        t.SharingHelper = e
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r, f = this && this.__extends || function (n, t) {
        function r() {
            this.constructor = n
        }
        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        n.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    };
    u = [i, t, i(30), i(24), i(22)];
    r = function (n, t, i, r, u) {
        "use strict";
        var e = function (n) {
            function t(t, i) {
                var f = this;
                n.call(this, t, i, !0);
                this.playerContainer = t;
                this.contentStartReported = !1;
                this.runIfDownloadFinished = function () {
                    window.YT && window.YT.Player ? f.OnYouTubeIframeAPIReady() : setTimeout(f.runIfDownloadFinished, 50)
                };
                this.onPlayerStateChanged = function (n) {
                    if (f.player) {
                        var t = window;
                        switch (n.data) {
                            case t.YT.PlayerState.PLAYING:
                                f.onYouTubeVideoBegin();
                                break;
                            case t.YT.PlayerState.ENDED:
                                f.onYouTubeVideoComplete();
                                break;
                            case t.YT.PlayerState.PAUSED:
                                f.setPlaybackStatus(u.PlaybackStatus.VideoPaused);
                                break;
                            case t.YT.PlayerState.BUFFERING:
                                f.setPlaybackStatus(u.PlaybackStatus.VideoBuffering)
                        }
                        f.log("state=" + n.data)
                    }
                };
                this.createElements();
                this.oldOnYouTubeIframeAPIReady = window.onYouTubeIframeAPIReady;
                window.onYouTubeIframeAPIReady = this.OnYouTubeIframeAPIReady.bind(this);
                r.PlayerUtility.loadScript(this.metadata && this.metadata.externalPlayerUrl || "https://www.youtube.com/iframe_api");
                this.runIfDownloadFinished()
            }
            return f(t, n), t.prototype.OnYouTubeIframeAPIReady = function () {
                var n = {
                    autoplay: this.playerOptions && this.playerOptions.autoplay ? "1" : "0",
                    showinfo: "1",
                    wmode: "window",
                    modestbranding: 1,
                    enablejsapi: 1,
                    fs: 1,
                    rel: 0,
                    origin: encodeURIComponent(document.location.hostname)
                };
                this.player = new window.YT.Player(this.id, {
                    height: "100%",
                    width: "100%",
                    videoId: this.metadata.videoId,
                    events: {
                        onStateChange: this.onPlayerStateChanged
                    },
                    playerVars: n
                });
                window.onYouTubeIframeAPIReady = this.oldOnYouTubeIframeAPIReady;
                this.oldOnYouTubeIframeAPIReady && (this.oldOnYouTubeIframeAPIReady(), this.oldOnYouTubeIframeAPIReady = null)
            }, t.prototype.onYouTubeVideoBegin = function () {
                this.setPlaybackStatus(u.PlaybackStatus.VideoPlaying);
                this.contentStartReported || (this.reportEvent(u.PlayerEvents.ContentStart), this.contentStartReported = !0)
            }, t.prototype.onYouTubeVideoComplete = function () {
                this.setPlaybackStatus(u.PlaybackStatus.PlaybackCompleted);
                this.reportEvent(u.PlayerEvents.ContentComplete);
                this.contentStartReported = !1
            }, t.prototype.load = function () { }, t.prototype.play = function () { }, t.prototype.pause = function () { }, t.prototype.mute = function () { }, t.prototype.unmute = function () { }, t
        }(i.ExternalPlayerBase);
        t.YoutubePlayer = e
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(9), i(24), i(11), i(22), i(9), i(26)];
    r = function (n, t, i, r, u, f, e, o) {
        "use strict";
        var s = function () {
            function n(t, r, u) {
                this.videoComponent = t;
                this.reporters = [];
                t && r && (this.metadata = r.metadata, this.playerOptions = r.options, this.container = i.selectFirstElementT(".f-external-player", this.videoComponent), this.container || (this.container = document.createElement("div"), this.container.setAttribute("class", n.externalDivClass), t.appendChild(this.container)), this.initializeReporting(), u ? this.reportEvent(f.PlayerEvents.CommonPlayerImpression) : this.reportEvent(f.PlayerEvents.ContentLoaded3PP))
            }
            return n.prototype.initializeReporting = function () {
                this.playerOptions && this.playerOptions.reporting && this.playerOptions.reporting.enabled && this.playerOptions.reporting.jsll && this.reporters.push(new o.JsllReporter(this.videoComponent))
            }, n.prototype.createElements = function () {
                this.id = r.PlayerUtility.random4CharString();
                this.player = document.createElement("div");
                this.player.setAttribute("id", this.id);
                this.container.appendChild(this.player)
            }, n.prototype.getReport = function () {
                var n = "3PP_" + this.metadata.playerName;
                return {
                    playerTechnology: n,
                    videoMetadata: this.metadata,
                    playerInstanceId: this.videoComponent.getAttribute("id"),
                    playerType: n,
                    videoSize: u.getDimensions(this.container)
                }
            }, n.prototype.setPlaybackStatus = function (n) {
                n && n !== this.playbackStatus && (this.playbackStatus = n, e.customEvent(this.videoComponent, f.PlayerEvents.PlaybackStatusChanged, {
                    detail: {
                        status: f.PlayerEvents.PlaybackStatusChanged
                    }
                }))
            }, n.prototype.reportEvent = function (n) {
                var i = this.getReport(),
                    t, r, u;
                for (this.log("Event reported : " + f.PlayerEvents[n] + " | data : " + JSON.stringify(i)), t = 0, r = this.reporters; t < r.length; t++) u = r[t], u.reportEvent(n, i);
                e.customEvent(this.videoComponent, f.PlayerEvents[n], {
                    detail: i
                })
            }, n.prototype.log = function (n) {
                this.playerOptions && this.playerOptions.debug && n && r.PlayerUtility.logConsoleMessage(n, "3PP")
            }, n.prototype.dispose = function () {
                var n = i.selectFirstElement("iframe", this.container);
                n && n.setAttribute("src", "");
                setTimeout(function () {
                    i.removeInnerHtml(this.container)
                }, 0)
            }, n.externalDivClass = "f-external-player", n
        }();
        t.ExternalPlayerBase = s
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(11), i(6), i(22)];
    r = function (n, t, i, r, u) {
        "use strict";
        var f = function () {
            function n(n) {
                this.autoload = !0;
                this.autoplay = !0;
                this.startTime = 0;
                this.mute = !1;
                this.loop = !1;
                this.controls = !0;
                this.trigger = !0;
                this.useHLS = !0;
                this.debug = !1;
                this.reporting = {
                    enabled: !1,
                    jsll: !1
                };
                this.playbackSpeed = !1;
                this.share = !1;
                this.shareOptions = [u.shareTypes.facebook, u.shareTypes.twitter, u.shareTypes.linkedin, u.shareTypes.skype, u.shareTypes.mail, u.shareTypes.copy];
                i.extend(this, n);
                r.Environment.isMobile && (this.autoplay = !1);
                n && n.shareOptions && (this.shareOptions = n.shareOptions)
            }
            return n
        }();
        t.PlayerOptions = f
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}, function (n, t, i) {
    var u, r;
    u = [i, t, i(8), i(3)];
    r = function (n, t, i, r) {
        "use strict";
        var u = function () {
            function n() { }
            return n
        }();
        t.VideoPlayerAutoInitializer = u,
            function () {
                i.ComponentFactory.create([{
                    c: r.VideoPlayer
                }])
            }()
    }.apply(t, u);
    !(void 0 !== r && (n.exports = r))
}]);
$(document).ready(function () {
    try {
        checkCookie("MSCC") != null && $("iframe[src*= 'youtube-nocookie.com']").attr("src", function (n, t) {
            return t.replace("-nocookie", "")
        })
    } catch (n) {
        console.log(n)
    }
});
$(document).ready(function () {
    $("svg").attr("focusable", "false")
}),
    function () {
        "use strict";
        var r, i, n, t;
        (function (t) {
            function e(n, t) {
                return tt.call(n, t)
            }

            function c(n, t) {
                var o, s, u, e, h, y, c, w, i, l, p, b, r = t && t.split("/"),
                    a = f.map,
                    v = a && a["*"] || {};
                if (n) {
                    for (n = n.split("/"), h = n.length - 1, f.nodeIdCompat && k.test(n[h]) && (n[h] = n[h].replace(k, "")), n[0].charAt(0) === "." && r && (b = r.slice(0, r.length - 1), n = b.concat(n)), i = 0; i < n.length; i++)
                        if (p = n[i], p === ".") n.splice(i, 1), i -= 1;
                        else if (p === "..")
                            if (i === 0 || i === 1 && n[2] === ".." || n[i - 1] === "..") continue;
                            else i > 0 && (n.splice(i - 1, 2), i -= 2);
                    n = n.join("/")
                }
                if ((r || v) && a) {
                    for (o = n.split("/"), i = o.length; i > 0; i -= 1) {
                        if (s = o.slice(0, i).join("/"), r)
                            for (l = r.length; l > 0; l -= 1)
                                if (u = a[r.slice(0, l).join("/")], u && (u = u[s], u)) {
                                    e = u;
                                    y = i;
                                    break
                                }
                        if (e) break;
                        !c && v && v[s] && (c = v[s], w = i)
                    } !e && c && (e = c, y = w);
                    e && (o.splice(0, y, e), n = o.join("/"))
                }
                return n
            }

            function w(n, i) {
                return function () {
                    var r = it.call(arguments, 0);
                    return typeof r[0] != "string" && r.length === 1 && r.push(null), o.apply(t, r.concat([n, i]))
                }
            }

            function d(n) {
                return function (t) {
                    return c(t, n)
                }
            }

            function g(n) {
                return function (t) {
                    u[n] = t
                }
            }

            function l(n) {
                if (e(h, n)) {
                    var i = h[n];
                    delete h[n];
                    p[n] = !0;
                    a.apply(t, i)
                }
                if (!e(u, n) && !e(p, n)) throw new Error("No " + n);
                return u[n]
            }

            function v(n) {
                var i, t = n ? n.indexOf("!") : -1;
                return t > -1 && (i = n.substring(0, t), n = n.substring(t + 1, n.length)), [i, n]
            }

            function b(n) {
                return n ? v(n) : []
            }

            function nt(n) {
                return function () {
                    return f && f.config && f.config[n] || {}
                }
            }
            var a, o, y, s, u = {},
                h = {},
                f = {},
                p = {},
                tt = Object.prototype.hasOwnProperty,
                it = [].slice,
                k = /\.js$/;
            y = function (n, t) {
                var r, u = v(n),
                    i = u[0],
                    f = t[1];
                return n = u[1], i && (i = c(i, f), r = l(i)), i ? n = r && r.normalize ? r.normalize(n, d(f)) : c(n, f) : (n = c(n, f), u = v(n), i = u[0], n = u[1], i && (r = l(i))), {
                    f: i ? i + "!" + n : n,
                    n: n,
                    pr: i,
                    p: r
                }
            };
            s = {
                require: function (n) {
                    return w(n)
                },
                exports: function (n) {
                    var t = u[n];
                    return typeof t != "undefined" ? t : u[n] = {}
                },
                module: function (n) {
                    return {
                        id: n,
                        uri: "",
                        exports: u[n],
                        config: nt(n)
                    }
                }
            };
            a = function (n, i, r, f) {
                var v, o, d, k, c, nt, a = [],
                    tt = typeof r,
                    it;
                if (f = f || n, nt = b(f), tt === "undefined" || tt === "function") {
                    for (i = !i.length && r.length ? ["require", "exports", "module"] : i, c = 0; c < i.length; c += 1)
                        if (k = y(i[c], nt), o = k.f, o === "require") a[c] = s.require(n);
                        else if (o === "exports") a[c] = s.exports(n), it = !0;
                        else if (o === "module") v = a[c] = s.module(n);
                        else if (e(u, o) || e(h, o) || e(p, o)) a[c] = l(o);
                        else if (k.p) k.p.load(k.n, w(f, !0), g(o), {}), a[c] = u[o];
                        else throw new Error(n + " missing " + o);
                    d = r ? r.apply(u[n], a) : undefined;
                    n && (v && v.exports !== t && v.exports !== u[n] ? u[n] = v.exports : d === t && it || (u[n] = d))
                } else n && (u[n] = r)
            };
            r = i = o = function (n, i, r, u, e) {
                if (typeof n == "string") return s[n] ? s[n](i) : l(y(n, b(i)).f);
                if (!n.splice) {
                    if (f = n, f.deps && o(f.deps, f.callback), !i) return;
                    i.splice ? (n = i, i = r, r = null) : n = t
                }
                return i = i || function () { }, typeof r == "function" && (r = u, u = e), u ? a(t, n, i, r) : setTimeout(function () {
                    a(t, n, i, r)
                }, 4), o
            };
            o.config = function (n) {
                return o(n)
            };
            r._defined = u;
            n = function (n, t, i) {
                if (typeof n != "string") throw new Error("See almond README: incorrect module build, no module name");
                t.splice || (i = t, t = []);
                e(u, n) || e(h, n) || (h[n] = [n, t, i])
            };
            n.amd = {
                jQuery: !0
            }
        })();
        n("pageBehaviors", ["require", "exports", "htmlExtensions", "removeFocus"], function (n, t, i, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = function () {
                function n() {
                    i.removeClass(document.documentElement, "no-js");
                    i.addClass(document.documentElement, "js");
                    i.hasClass(document.body, "c_native") && window.navigator && typeof window.navigator.gamepadInputEmulation == "string" && (window.navigator.gamepadInputEmulation = "keyboard");
                    r.setupRemoveFocus()
                }
                return n.typeName = "PageBehaviors", n
            }();
            t.PageBehaviors = u
        });
        i(["pageBehaviors", "componentFactory"], function (n, t) {
            t.ComponentFactory && t.ComponentFactory.create && t.ComponentFactory.create([{
                component: n.PageBehaviors
            }])
        });
        n("removeFocus", ["require", "exports", "htmlExtensions"], function (n, t, i) {
            function e() {
                return f ? !1 : (f = !0, i.addEvent(document.body, i.eventTypes.mousedown, s), i.addEvents(document.body, "blur keydown", o), !0)
            }

            function o() {
                i.removeClass(r, u);
                r.length = 0
            }

            function s(n) {
                var t = i.getEventTargetOrSrcElement(n);
                i.addClass(t, u);
                r.push(t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = "x-hidden-focus",
                f = !1,
                r = [];
            t.setupRemoveFocus = e
        });
        n("componentFactory", ["require", "exports", "htmlExtensions", "utility", "stringExtensions"], function (n, t, i, r, u) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = function () {
                function n() { }
                return n.create = function (t) {
                    for (var i, r = 0, u = t; r < u.length; r++) {
                        if (i = u[r], !i.c && !i.component) throw "factoryInput should has either component or c to tell the factory what component to create.Eg.ComponentFactory.create([{ c: Carousel] or ComponentFactory.create([component: Carousel]))";
                        n.createComponent(i.component || i.c, i)
                    }
                }, n.createComponent = function (t, r) {
                    if (t) {
                        var o = r && r.eventToBind ? r.eventToBind : "",
                            f = r && r.selector ? r.selector : t.selector,
                            s = r && r.context ? r.context : null,
                            u = [],
                            e = function (n, f, e) {
                                var a, c, l, o, h;
                                for (a = r.elements ? r.elements : f ? i.selectElementsT(f, s) : [document.body], c = 0, l = a; c < l.length; c++) o = l[c], o.mwfInstances || (o.mwfInstances = {}), o.mwfInstances[n] ? u.push(o.mwfInstances[n]) : (h = new t(o, e), (!h.isObserving || h.isObserving()) && (o.mwfInstances[n] = h, u.push(h)))
                            };
                        switch (o) {
                            case "DOMContentLoaded":
                                if (n.onDomReadyHappened) n.callBindFunction(t, f, e, r, u);
                                else {
                                    n.domReadyFunctions.push(function () {
                                        return n.callBindFunction(t, f, e, r, u)
                                    });
                                    break
                                }
                                break;
                            case "load":
                            default:
                                if (n.onDeferredHappened) n.callBindFunction(t, f, e, r, u);
                                else {
                                    n.deferredFunctions.push(function () {
                                        return n.callBindFunction(t, f, e, r, u)
                                    });
                                    break
                                }
                        }
                    }
                }, n.callBindFunction = function (t, i, u, f, e) {
                    f === void 0 && (f = null);
                    var o = n.getTypeName(t),
                        s = o || i || "",
                        h = f && f.params ? f.params : {};
                    h.mwfClass = o;
                    r.createPerfMarker(s + "_Begin");
                    u(o, i, h);
                    r.createPerfMarker(s + "_End");
                    f && f.callback && f.callback(e)
                }, n.getTypeName = function (t) {
                    if (t.typeName) return t.typeName;
                    if (t.name) return t.name;
                    var i = n.typeNameRegEx.exec(t.toString());
                    if (i && i.length > 1) return i[1]
                }, n.enumerateComponents = function (n, t) {
                    var i, r, u;
                    if (n && t) {
                        i = n.mwfInstances;
                        for (r in i)
                            if (i.hasOwnProperty(r) && (u = i[r], u && !t(r, u))) break
                    }
                }, n.detach = function (n, t) {
                    var i = n,
                        r;
                    i && i.mwfInstances && !u.isNullOrWhiteSpace(t) && i.mwfInstances.hasOwnProperty(t) && (r = i.mwfInstances[t], i.mwfInstances[t] = null, r && r.detach && r.detach())
                }, n.typeNameRegEx = /function\s+(\S+)\s*\(/, n.onLoadTimeoutMs = 6e3, n.onDeferredHappened = !1, n.deferredFunctions = [], n.onDomReadyHappened = !1, n.domReadyFunctions = [], n
            }();
            t.ComponentFactory = f,
                function () {
                    i.onDeferred(function () {
                        var n, t, r, u;
                        if (f.onDeferredHappened = !0, n = f.deferredFunctions, !n || n.length > 0)
                            for (t = 0, r = n; t < r.length; t++) u = r[t], typeof u == "function" && i.SafeBrowserApis.requestAnimationFrame.call(window, u);
                        f.deferredFunctions = null
                    }, f.onLoadTimeoutMs);
                    i.documentReady(function () {
                        var n, t, r, u;
                        if (f.onDomReadyHappened = !0, n = f.domReadyFunctions, !n || n.length > 0)
                            for (t = 0, r = n; t < r.length; t++) u = r[t], typeof u == "function" && i.SafeBrowserApis.requestAnimationFrame.call(window, u);
                        f.domReadyFunctions = null
                    }, f.onLoadTimeoutMs)
                }()
        });
        n("htmlExtensions", ["require", "exports", "stringExtensions"], function (n, t, i) {
            function e(n, t, i, f) {
                var e, o, s;
                for (f === void 0 && (f = !1), e = 0, o = u(n); e < o.length; e++) s = o[e], v(s, i, f, r[t])
            }

            function g(n, t, r, f) {
                var e, s, l, o, h, c;
                if (f === void 0 && (f = !1), !i.isNullOrWhiteSpace(t))
                    for (e = 0, s = u(n); e < s.length; e++)
                        for (l = s[e], o = 0, h = t.split(/\s+/); o < h.length; o++) c = h[o], i.isNullOrWhiteSpace(c) || v(l, r, f, c)
            }

            function nt(n, t, r, f) {
                var e, s, l, o, h, c;
                for (f === void 0 && (f = !1), e = 0, s = u(n); e < s.length; e++)
                    for (l = s[e], o = 0, h = u(t); o < h.length; o++) c = h[o], i.isNullOrWhiteSpace(c) || d(l, r, f, c)
            }

            function tt(n) {
                n = a(n);
                n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
            }

            function it(n, t, i, r) {
                r === void 0 && (r = 150);
                var f, u = 0,
                    o = function (n) {
                        var t = Date.now();
                        f && (clearTimeout(f), f = undefined);
                        !!u && t < u + r ? f = setTimeout(function () {
                            u = Date.now();
                            i(n)
                        }, r - (t - u)) : (u = t, i(n))
                    };
                return e(n, t, o), o
            }

            function rt(n, t, r, f, e) {
                function p(n) {
                    var i, t = 0;
                    return function (r) {
                        var u = Date.now();
                        clearTimeout(i);
                        !!t && u < t + e ? i = setTimeout(function () {
                            t = u;
                            n(r)
                        }, e - (u - t)) : (t = u, n(r))
                    }
                }
                var o, h, a, s, c, l, y;
                if (f === void 0 && (f = !1), e === void 0 && (e = 150), !i.isNullOrWhiteSpace(t))
                    for (o = 0, h = u(n); o < h.length; o++)
                        for (a = h[o], s = 0, c = t.split(/\s+/); s < c.length; s++) l = c[s], i.isNullOrWhiteSpace(l) || (y = p(r), v(a, y, f, l))
            }

            function ut(n, t, i, r) {
                r === void 0 && (r = 150);
                var u, f = function (n) {
                    window.clearTimeout(u);
                    u = setTimeout(function () {
                        i(n)
                    }, r)
                };
                return e(n, t, f), f
            }

            function ft(n, t) {
                if (t === void 0 && (t = 5e3), document.readyState === "complete") {
                    n.call(null);
                    return
                }
                if (!document.attachEvent && document.readyState === "interactive") {
                    n.call(null);
                    return
                }
                var o, i, u, f = function () {
                    clearTimeout(o);
                    i && h(document, r.DOMContentLoaded, i);
                    u && h(document, r.onreadystatechange, u);
                    y.requestAnimationFrame.call(window, n)
                };
                if (o = setTimeout(function () {
                    f("timedout")
                }, t), document.addEventListener) {
                    i = function () {
                        f("domcontentloaded")
                    };
                    e(document, r.DOMContentLoaded, i, !1);
                    return
                }
                document.attachEvent && (u = function () {
                    document.readyState === "complete" && f("readystatecomplete")
                }, e(document, r.onreadystatechange, u, !1))
            }

            function et(n, t) {
                t === void 0 && (t = 5e3);
                var i, u = setTimeout(function () {
                    clearTimeout(u);
                    h(window, r.load, i);
                    n.call(null)
                }, t);
                i = function () {
                    clearTimeout(u);
                    y.requestAnimationFrame.call(window, n)
                };
                document.readyState === "complete" ? (clearTimeout(u), n.call(null)) : e(window, r.load, i)
            }

            function p(n, t) {
                !n || i.isNullOrWhiteSpace(t) || b(n, t) || (n.classList ? n.classList.add(t) : n.className = i.trim(n.className + " " + t))
            }

            function w(n, t) {
                var o, e, s, r, f;
                if (!!n && !i.isNullOrWhiteSpace(t))
                    for (o = " " + i.trim(t) + " ", e = 0, s = u(n); e < s.length; e++)
                        if (r = s[e], r.classList) r.classList.remove(t);
                        else if (!i.isNullOrWhiteSpace(r.className)) {
                            for (f = " " + r.className + " "; f.indexOf(o) > -1;) f = f.replace(o, " ");
                            r.className = i.trim(f)
                        }
            }

            function ot(n, t) {
                var i, r, u;
                if (t)
                    for (i = 0, r = t; i < r.length; i++) u = r[i], w(n, u)
            }

            function st(n, t) {
                var i, r, u;
                if (t)
                    for (i = 0, r = t; i < r.length; i++) u = r[i], p(n, u)
            }

            function ht(n, t) {
                var u, f, r;
                if (n && t)
                    for (u = 0, f = t; u < f.length; u++) r = f[u], i.isNullOrWhiteSpace(r.name) || i.isNullOrWhiteSpace(r.value) || n.setAttribute(r.name, r.value)
            }

            function b(n, t) {
                return !n || i.isNullOrWhiteSpace(t) ? !1 : n.classList ? n.classList.contains(t) : (" " + n.className + " ").indexOf(" " + i.trim(t) + " ") > -1
            }

            function ct(n) {
                return n ? n.parentElement.removeChild(n) : n
            }

            function lt(n, t) {
                return s(n, t)
            }

            function at(n, t) {
                var i = s(n, t);
                return !i || !i.length ? null : i[0]
            }

            function s(n, t) {
                var r, u;
                if (i.isNullOrWhiteSpace(n) || n === "#") return [];
                if (r = t || document, /^[\#.]?[\w-]+$/.test(n)) {
                    switch (n[0]) {
                        case ".":
                            return r.getElementsByClassName ? o(r.getElementsByClassName(n.slice(1))) : o(r.querySelectorAll(n));
                        case "#":
                            return u = r.querySelector(n), u ? [u] : []
                    }
                    return o(r.getElementsByTagName(n))
                }
                return o(r.querySelectorAll(n))
            }

            function vt(n, t) {
                var i = s(n, t);
                return !i || !i.length ? null : i[0]
            }

            function yt(n, t) {
                var o = t || document,
                    u, f, i, r, e;
                for (u = n.split(","), i = 0, r = u; i < r.length; i++) e = r[i], f += this.selectElements(e, o);
                return f
            }

            function o(n) {
                var i, t;
                if (!n) return [];
                for (i = [], t = 0; t < n.length; t++) i.push(n[t]);
                return i
            }

            function pt(n) {
                for (n === void 0 && (n = document.documentElement); n !== null;) {
                    var t = n.getAttribute("dir");
                    if (t) return t === "rtl" ? c.right : c.left;
                    n = n.parentElement
                }
                return c.left
            }

            function l(n) {
                var i, t, r;
                if (n) {
                    i = n.getBoundingClientRect();
                    t = {};
                    for (r in i) t[r] = i[r];
                    return typeof t.width == "undefined" && (t.width = n.offsetWidth), typeof t.height == "undefined" && (t.height = n.offsetHeight), t
                }
            }

            function wt(n) {
                if (n) return {
                    width: parseFloat(l(n).width) + parseFloat(f(n, "margin-left")) + parseFloat(f(n, "margin-right")),
                    height: parseFloat(l(n).height) + parseFloat(f(n, "margin-top")) + parseFloat(f(n, "margin-bottom"))
                }
            }

            function f(n, t, r) {
                if (!n) return null;
                if (!r && r !== "") return r = n.style[t], i.isNullOrWhiteSpace(r) && (r = getComputedStyle(n), r = r[t]), r;
                n.style[t] = r
            }

            function h(n, t, i, f) {
                var e, o, s;
                if (n && t && i)
                    for (e = 0, o = u(n); e < o.length; e++) s = o[e], d(s, i, f, r[t])
            }

            function k(n) {
                return Array.isArray ? Array.isArray(n) : {}.toString.call(n) === "[object Array]"
            }

            function u(n) {
                return k(n) ? n : [n]
            }

            function bt(n, t) {
                return !!n && n !== t && n.contains(t)
            }

            function kt(n, t) {
                return !!n && n.contains(t)
            }

            function dt(n) {
                return n ? n.textContent || n.innerText || "" : ""
            }

            function gt(n, t) {
                n && t !== null && (n.textContent ? n.textContent = t : n.innerHTML = t)
            }

            function ni(n) {
                n && (n.innerHTML = "")
            }

            function ti(n) {
                return n = a(n), n.target || n.srcElement
            }

            function a(n) {
                return n || window.event
            }

            function v(n, t, i, r) {
                i === void 0 && (i = !1);
                n && (window.addEventListener ? n.addEventListener(r, t, i) : n.attachEvent("on" + r, t))
            }

            function d(n, t, i, r) {
                i === void 0 && (i = !1);
                n && (window.removeEventListener ? n.removeEventListener(r, t, i) : n.detachEvent("on" + r, t))
            }

            function ii(n, t, i) {
                if (i === void 0 && (i = {}), !n || !t) return null;
                var f = typeof t == "string" ? t : r[t],
                    u = null;
                if (i.bubbles = typeof i.bubbles == "undefined" ? !0 : i.bubbles, i.cancelable = typeof i.cancelable == "undefined" ? !0 : i.cancelable, window.CustomEvent && typeof CustomEvent == "function") u = new CustomEvent(f, i), i.changedTouches && i.changedTouches.length && (u.changedTouches = i.changedTouches);
                else if (document.createEvent) u = document.createEvent("CustomEvent"), u.initCustomEvent(f, i.bubbles, i.cancelable, i.detail), i.changedTouches && i.changedTouches.length && (u.changedTouches = i.changedTouches);
                else {
                    u = document.createEventObject();
                    try {
                        n.fireEvent("on" + f, u)
                    } catch (e) {
                        return undefined
                    }
                    return u
                }
                return n.dispatchEvent(u), u
            }

            function ri(n) {
                n.stopPropagation ? n.stopPropagation() : n.returnValue = !1
            }

            function ui(n) {
                return n === void 0 && (n = window), n.scrollY || n.pageYOffset || (n.document.compatMode === "CSS1Compat" ? n.document.documentElement.scrollTop : n.document.body.scrollTop)
            }

            function fi(n) {
                if (!n) return window.document.documentElement;
                for (var i = n.ownerDocument.documentElement, t = n.offsetParent; t && f(t, "position") == "static";) t = t.offsetParent;
                return t || i
            }

            function ei(n, t) {
                if (n && t) {
                    var i = t.clientHeight,
                        r = t.scrollHeight;
                    r > i && (t.scrollTop = Math.min(n.offsetTop - t.firstElementChild.offsetTop, r - i))
                }
            }

            function oi(n) {
                return typeof n.complete != "undefined" && typeof n.naturalHeight != "undefined" ? n && n.complete && n.naturalHeight > 0 : !0
            }

            function si(n) {
                return n && typeof n.complete != "undefined" && typeof n.naturalHeight != "undefined" ? n && n.complete && n.naturalWidth == 0 && n.naturalHeight == 0 : !1
            }

            function hi(n) {
                var i = n.touches && n.touches.length ? n.touches : [n],
                    t = n.changedTouches && n.changedTouches[0] || i[0];
                return {
                    x: t.clientX,
                    y: t.clientY
                }
            }

            function ci(n, t) {
                for (var i = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector; n;) {
                    if (i.call(n, t)) break;
                    n = n.parentElement
                }
                return n
            }

            function li(n, t) {
                t === void 0 && (t = !0);
                !!n && (window.PointerEvent || window.navigator.pointerEnabled) && f(n, "touchAction", t ? "pan-y" : "pan-x")
            }
            var y, c, r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (n) {
                    n.requestAnimationFrame = window.requestAnimationFrame || function (n) {
                        typeof n == "function" && window.setTimeout(n, 16.7)
                    }
                }(y = t.SafeBrowserApis || (t.SafeBrowserApis = {})),
                function (n) {
                    n[n.right = 0] = "right";
                    n[n.left = 1] = "left"
                }(c = t.Direction || (t.Direction = {})),
                function (n) {
                    n[n.animationend = 0] = "animationend";
                    n[n.blur = 1] = "blur";
                    n[n.change = 2] = "change";
                    n[n.click = 3] = "click";
                    n[n.DOMContentLoaded = 4] = "DOMContentLoaded";
                    n[n.DOMNodeInserted = 5] = "DOMNodeInserted";
                    n[n.DOMNodeRemoved = 6] = "DOMNodeRemoved";
                    n[n.ended = 7] = "ended";
                    n[n.error = 8] = "error";
                    n[n.focus = 9] = "focus";
                    n[n.focusin = 10] = "focusin";
                    n[n.focusout = 11] = "focusout";
                    n[n.input = 12] = "input";
                    n[n.load = 13] = "load";
                    n[n.keydown = 14] = "keydown";
                    n[n.keypress = 15] = "keypress";
                    n[n.keyup = 16] = "keyup";
                    n[n.loadedmetadata = 17] = "loadedmetadata";
                    n[n.mousedown = 18] = "mousedown";
                    n[n.mousemove = 19] = "mousemove";
                    n[n.mouseout = 20] = "mouseout";
                    n[n.mouseover = 21] = "mouseover";
                    n[n.mouseup = 22] = "mouseup";
                    n[n.onreadystatechange = 23] = "onreadystatechange";
                    n[n.resize = 24] = "resize";
                    n[n.scroll = 25] = "scroll";
                    n[n.submit = 26] = "submit";
                    n[n.timeupdate = 27] = "timeupdate";
                    n[n.touchcancel = 28] = "touchcancel";
                    n[n.touchend = 29] = "touchend";
                    n[n.touchmove = 30] = "touchmove";
                    n[n.touchstart = 31] = "touchstart";
                    n[n.wheel = 32] = "wheel"
                }(r = t.eventTypes || (t.eventTypes = {}));
            t.addEvent = e;
            t.addEvents = g;
            t.removeEvents = nt;
            t.preventDefault = tt;
            t.addThrottledEvent = it;
            t.addThrottledEvents = rt;
            t.addDebouncedEvent = ut;
            t.documentReady = ft;
            t.onDeferred = et;
            t.addClass = p;
            t.removeClass = w;
            t.removeClasses = ot;
            t.addClasses = st;
            t.addAttribute = ht;
            t.hasClass = b;
            t.removeElement = ct;
            t.selectElements = lt;
            t.selectFirstElement = at;
            t.selectElementsT = s;
            t.selectFirstElementT = vt;
            t.selectElementsFromSelectors = yt;
            t.nodeListToArray = o;
            t.getDirection = pt;
            t.getClientRect = l;
            t.getClientRectWithMargin = wt;
            t.css = f;
            t.removeEvent = h;
            t.isArray = k;
            t.toArray = u;
            t.isDescendant = bt;
            t.isDescendantOrSelf = kt;
            t.getText = dt;
            t.setText = gt;
            t.removeInnerHtml = ni;
            t.getEventTargetOrSrcElement = ti;
            t.getEvent = a;
            t.customEvent = ii;
            t.stopPropagation = ri;
            t.getScrollY = ui;
            t.getOffsetParent = fi;
            t.scrollElementIntoView = ei;
            t.isImageLoadedSuccessfully = oi;
            t.isImageLoadFailed = si;
            t.getCoordinates = hi;
            t.getParent = ci;
            t.preventDefaultSwipeAction = li
        });
        n("keycodes", ["require", "exports"], function (n, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        });
        n("observableComponent", ["require", "exports", "htmlExtensions"], function (n, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function () {
                function n(t, i) {
                    i === void 0 && (i = null);
                    this.element = t;
                    this.ignoreNextDOMChange = !1;
                    this.observing = !1;
                    n.shouldInitializeAsClass(t, i) && this.setObserver()
                }
                return n.prototype.detach = function () {
                    this.unObserve();
                    this.teardown()
                }, n.prototype.isObserving = function () {
                    return this.observing
                }, n.prototype.unObserve = function () {
                    this.observing = !1;
                    this.modernObserver && this.modernObserver.disconnect();
                    i.removeEvent(this.element, i.eventTypes.DOMNodeInserted, this.obsoleteNodeInsertedEventHander);
                    i.removeEvent(this.element, i.eventTypes.DOMNodeRemoved, this.obsoleteNodeRemovedEventHandler)
                }, n.prototype.setObserver = function () {
                    this.observing = !0;
                    typeof n.mutationObserver != "undefined" ? this.observeModern() : "MutationEvent" in window && this.observeObsolete()
                }, n.prototype.observeModern = function () {
                    var t = this,
                        i = function (n) {
                            t.onModernMutations(n)
                        };
                    this.modernObserver = new n.mutationObserver(i);
                    this.modernObserver.observe(this.element, {
                        childList: !0,
                        subtree: !0
                    })
                }, n.prototype.onModernMutations = function (n) {
                    var r, u, f, e, i, o, t, s;
                    if (this.ignoreNextDOMChange) {
                        this.ignoreNextDOMChange = !1;
                        return
                    }
                    for (r = !1, u = !1, f = 0, e = n; f < e.length; f++) {
                        for (i = e[f], t = 0, o = i.addedNodes.length; t < o; t++) i.addedNodes[t].nodeType === Node.ELEMENT_NODE && (r = !0, u = !0);
                        for (t = 0, s = i.removedNodes.length; t < s; t++) i.removedNodes[t].nodeType === Node.ELEMENT_NODE && (r = !0, i.removedNodes[t] !== this.element && (u = !0))
                    }
                    r && this.teardown();
                    u && this.update()
                }, n.prototype.observeObsolete = function () {
                    var n = this;
                    this.obsoleteNodeInsertedEventHander = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeInserted, function () {
                        n.onObsoleteNodeInserted()
                    });
                    this.obsoleteNodeRemovedEventHandler = i.addDebouncedEvent(this.element, i.eventTypes.DOMNodeRemoved, function (t) {
                        n.onObsoleteNodeRemoved(t)
                    })
                }, n.prototype.onObsoleteNodeInserted = function () {
                    this.ignoreNextDOMChange || (this.teardown(), this.update())
                }, n.prototype.onObsoleteNodeRemoved = function (n) {
                    this.ignoreNextDOMChange || (this.teardown(), i.getEventTargetOrSrcElement(n) !== this.element && this.update())
                }, n.shouldInitializeAsClass = function (t, i) {
                    var r = t ? t.getAttribute(n.mwfClassAttribute) : null,
                        u = t ? t.getAttribute(n.initializeAttribute) : null;
                    return u === "false" ? !1 : !!t && (!r || !!i && r === i.mwfClass)
                }, n.mwfClassAttribute = "data-mwf-class", n.initializeAttribute = "data-js-initialize", n.mutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, n
            }();
            t.ObservableComponent = r
        });
        t = this && this.__extends || function () {
            var n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (n, t) {
                    n.__proto__ = t
                } || function (n, t) {
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
                };
            return function (t, i) {
                function r() {
                    this.constructor = t
                }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }();
        n("publisher", ["require", "exports", "observableComponent"], function (n, i, r) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var u = function (n) {
                function i(t, i) {
                    i === void 0 && (i = null);
                    var r = n.call(this, t, i) || this;
                    return r.element = t, r
                }
                return t(i, n), i.prototype.subscribe = function (n) {
                    if (!n) return !1;
                    if (this.subscribers) {
                        if (this.subscribers.indexOf(n) !== -1) return !1
                    } else this.subscribers = [];
                    return this.subscribers.push(n), !0
                }, i.prototype.unsubscribe = function (n) {
                    if (!n || !this.subscribers || !this.subscribers.length) return !1;
                    var t = this.subscribers.indexOf(n);
                    return t === -1 ? !1 : (this.subscribers.splice(t, 1), !0)
                }, i.prototype.hasSubscribers = function () {
                    return !!this.subscribers && this.subscribers.length > 0
                }, i.prototype.initiatePublish = function (n) {
                    var t, i, r;
                    if (this.hasSubscribers())
                        for (t = 0, i = this.subscribers; t < i.length; t++) r = i[t], this.publish(r, n)
                }, i.prototype.update = function () { }, i.prototype.teardown = function () { }, i
            }(r.ObservableComponent);
            i.Publisher = u
        });
        n("stringExtensions", ["require", "exports"], function (n, t) {
            function r(n) {
                return !n || typeof n != "string" || !i(n)
            }

            function i(n) {
                return !n || typeof n != "string" ? n : n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
            }

            function u(n, t, i) {
                return (i === void 0 && (i = !0), !n || !t) ? !1 : (i && (n = n.toLocaleLowerCase(), t = t.toLocaleLowerCase()), n.startsWith) ? n.startsWith(t) : n.indexOf(t) === 0
            }

            function f(n, t, i) {
                return (i === void 0 && (i = !0), !n || !t) ? !1 : (i && (n = n.toLocaleLowerCase(), t = t.toLocaleLowerCase()), n.endsWith) ? n.endsWith(t) : n.lastIndexOf(t) === n.length - t.length
            }

            function e(n, t, i) {
                if (i === void 0 && (i = !0), !n || !t) return 0;
                var r = 0;
                for (i && (n = n.toLocaleLowerCase(), t = t.toLocaleLowerCase()); n.charCodeAt(r) === t.charCodeAt(r);) r++;
                return r
            }

            function o(n) {
                for (var i = [], t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
                return n.replace(/{(\d+)}/g, function (n, t) {
                    if (t >= i.length) return n;
                    var r = i[t];
                    return typeof r != "number" && !r ? "" : typeof r == "string" ? r : r.toString()
                })
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.isNullOrWhiteSpace = r;
            t.trim = i;
            t.startsWith = u;
            t.endsWith = f;
            t.getMatchLength = e;
            t.format = o
        });
        n("utility", ["require", "exports", "stringExtensions"], function (n, t, i) {
            function r(n) {
                return !isNaN(n) && typeof n == "number"
            }

            function f() {
                return window.innerWidth && document.documentElement.clientWidth ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth
            }

            function h() {
                return window.innerHeight && document.documentElement.clientHeight ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight
            }

            function c(n) {
                if (n != null) return {
                    width: n.clientWidth,
                    height: n.clientHeight
                }
            }

            function l(n) {
                var t;
                if ((n = n || window.event, !n) || (t = n.key || n.keyIdentifier, !t)) return t;
                switch (t) {
                    case "Left":
                        return "ArrowLeft";
                    case "Right":
                        return "ArrowRight";
                    case "Up":
                        return "ArrowUp";
                    case "Down":
                        return "ArrowDown";
                    case "Esc":
                        return "Escape";
                    default:
                        return t
                }
            }

            function a(n) {
                return n = n || window.event, n == null ? null : n.which || n.keyCode || n.charCode
            }

            function v(n, t, i, r, u) {
                var o = "",
                    f, e;
                r && (f = new Date, f.setTime(f.getTime() + r * 864e5), o = "; expires=" + f.toUTCString());
                e = "";
                u && (e = ";domain=" + u);
                window.document.cookie = n + "=" + encodeURIComponent(t) + o + ("; path=" + i + ";") + e
            }

            function y(n) {
                var t, i;
                if (!!n)
                    for (t = 0, i = document.cookie.split("; "); t < i.length; t++) {
                        var r = i[t],
                            f = r.indexOf("="),
                            u = e(r.substring(0, f));
                        if (u === n) return e(r.substring(u.length + 1))
                    }
                return null
            }

            function e(n) {
                return n = decodeURIComponent(n.replace("/+/g", " ")), n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), n
            }

            function p(n) {
                var t;
                if (!!n && n.length === 6) {
                    var i = parseInt(n.substring(0, 2), 16),
                        r = parseInt(n.substring(2, 4), 16),
                        u = parseInt(n.substring(4, 6), 16);
                    if (!isNaN(i) && !isNaN(r) && !isNaN(u)) return t = (i * 299 + r * 587 + u * 114) / 255e3, t >= .5 ? 2 : 1
                }
                return null
            }

            function w(n, t, i) {
                return !i || !r(n) || !r(t) || !r(i.left) || !r(i.right) || !r(i.top) || !r(i.bottom) ? !1 : n >= i.left && n <= i.right && t >= i.top && t <= i.bottom
            }

            function b(n) {
                console && console.warn ? console.warn(n) : console && console.error && console.error(n)
            }

            function k(n, t) {
                if ((t || !(o("item").toLowerCase().indexOf("perf_marker_global:true") < 0)) && !i.isNullOrWhiteSpace(n) && window.performance && window.performance.mark) {
                    var r = n.split(" ").join("_");
                    window.performance.mark(r);
                    window.console && window.console.timeStamp && window.console.timeStamp(r)
                }
            }

            function d(n) {
                if (i.isNullOrWhiteSpace(n) || !window.performance || !window.performance.mark) return 0;
                var r = n.split(" ").join("_"),
                    t = window.performance.getEntriesByName(r);
                return t && t.length ? Math.round(t[t.length - 1].startTime) : 0
            }

            function g(n, t) {
                var f;
                if (!r(n)) return "00:00";
                f = n < 0;
                f && (n *= -1);
                var u = Math.floor(n / 3600),
                    e = n % 3600,
                    o = Math.floor(e / 60),
                    i = "";
                return i = t ? u > 0 ? u + ":" : "00:" : u > 0 ? u + ":" : "", n = Math.floor(e % 60), i += (o < 10 ? "0" : "") + o, i += ":" + (n === 0 ? "00" : (n < 10 ? "0" : "") + n), f ? "-" + i : i
            }

            function nt(n) {
                if (!JSON || !JSON.parse) throw new Error("JSON.parse unsupported.");
                if (!n) throw new Error("Invalid json.");
                return JSON.parse(n)
            }

            function u() {
                for (var e, t, o, n, f, i, r = [], h = 0; h < arguments.length; h++) r[h] = arguments[h];
                if (!r || !r.length) return null;
                if (e = typeof r[0] == "boolean" && r[0], r.length < 2) return e ? null : r[0];
                if (e && r.length < 3) return r[1];
                for (t = e ? r[1] : r[0], o = e ? 2 : 1; o < r.length; o++)
                    for (n in r[o])
                        if (r[o].hasOwnProperty(n)) {
                            if (f = r[o][n], e) {
                                var s = Array.isArray ? Array.isArray(f) : {}.toString.call(f) === "[object Array]",
                                    c = !!t[n] && (Array.isArray ? Array.isArray(t[n]) : {}.toString.call(t[n]) === "[object Array]"),
                                    l = !s && typeof f == "object",
                                    a = !c && !!t[n] && typeof t[n] == "object";
                                if (s && c) {
                                    for (i = 0; i < f.length; i++) s = Array.isArray ? Array.isArray(f[i]) : {}.toString.call(f[i]) === "[object Array]", c = !!t[n][i] && (Array.isArray ? Array.isArray(t[n][i]) : {}.toString.call(t[n][i]) === "[object Array]"), l = !s && typeof f[i] == "object", a = !c && !!t[n][i] && typeof t[n][i] == "object", t[n][i] = s ? u(!0, c ? t[n][i] : [], f[i]) : l ? u(!0, a ? t[n][i] : {}, f[i]) : f[i];
                                    continue
                                } else if (s) {
                                    t[n] = u(!0, [], f);
                                    continue
                                } else if (l) {
                                    t[n] = u(!0, a ? t[n] : {}, f);
                                    continue
                                }
                            }
                            t[n] = f
                        }
                return t
            }

            function tt(n, t, i, r, u) {
                var f = !i || i < 0 ? -1 : Number(new Date) + i;
                t = t || 100,
                    function e() {
                        var i = n();
                        if (i && r) r();
                        else {
                            if (i) return;
                            if (f === -1 || Number(new Date) < f) setTimeout(e, t);
                            else if (u) u();
                            else return
                        }
                    }()
            }

            function o(n, t) {
                return t === void 0 && (t = !0), s(location.search, n, t)
            }

            function it(n, t, i) {
                return i === void 0 && (i = !0), s(n, t, i)
            }

            function s(n, t, i) {
                if (i === void 0 && (i = !0), !t || !n) return "";
                var r = "[\\?&]" + t.replace(/[\[\]]/g, "\\$&") + "=([^&#]*)",
                    f = i ? new RegExp(r, "i") : new RegExp(r),
                    u = f.exec(n);
                return u === null ? "" : decodeURIComponent(u[1].replace(/\+/g, " "))
            }

            function rt(n, t) {
                var i, r;
                if (!t) return n;
                if (n.indexOf("//") === -1) throw 'To avoid unexpected results in URL parsing, url must begin with "http://", "https://", or "//"';
                return i = document.createElement("a"), i.href = n, i.search = (i.search ? i.search + "&" : "?") + t, r = i.href, i = null, r
            }

            function ut(n, t) {
                if (window.sessionStorage && n && t) try {
                    sessionStorage.setItem(n, t)
                } catch (i) { }
            }

            function ft(n) {
                if (!window.sessionStorage || !n) return null;
                try {
                    return sessionStorage.getItem(n)
                } catch (t) {
                    return null
                }
            }

            function et(n, t) {
                if (window.localStorage && n && t) try {
                    localStorage.setItem(n, t)
                } catch (i) { }
            }

            function ot(n) {
                if (!window.localStorage || !n) return null;
                try {
                    return localStorage.getItem(n)
                } catch (t) {
                    return null
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.isNumber = r;
            t.getWindowWidth = f;
            t.getWindowHeight = h;
            t.getDimensions = c;
            t.getVirtualKey = l;
            t.getKeyCode = a;
            t.setCookie = v;
            t.getCookie = y;
            t.detectContrast = p;
            t.pointInRect = w;
            t.apiDeprecated = b;
            t.createPerfMarker = k;
            t.getPerfMarkerValue = d;
            t.toElapsedTimeString = g;
            t.parseJson = nt;
            t.extend = u;
            t.poll = tt;
            t.getQSPValue = o;
            t.getQSPFromUrl = it;
            t.addQSP = rt;
            t.saveToSessionStorage = ut;
            t.getValueFromSessionStorage = ft;
            t.saveToLocalStorage = et;
            t.getValueFromLocalStorage = ot;
            var st;
            (function (n) {
                function t() {
                    var t;
                    if (window.matchMedia) {
                        for (t = 0; t < n.allWidths.length; ++t)
                            if (!window.matchMedia("(min-width:" + n.allWidths[t] + "px)").matches) return t
                    } else
                        for (t = 0; t < n.allWidths.length; ++t)
                            if (!(f() >= n.allWidths[t])) return t;
                    return n.allWidths.length
                }
                n.allWidths = [320, 540, 768, 1084, 1400, 1779];
                n.vpMin = n.allWidths[0];
                n.vpMax = 2048;
                n.getViewport = t
            })(st = t.Viewports || (t.Viewports = {}))
        });
        t = this && this.__extends || function () {
            var n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (n, t) {
                    n.__proto__ = t
                } || function (n, t) {
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
                };
            return function (t, i) {
                function r() {
                    this.constructor = t
                }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }();
        n("alert", ["require", "exports", "publisher", "htmlExtensions"], function (n, i, r, u) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var f = function (n) {
                function i(t) {
                    var i = n.call(this, t) || this;
                    return i.closeAlertAndRemoveEvent = function () {
                        u.removeEvent(i.closeButton, u.eventTypes.click, i.closeAlertAndRemoveEvent);
                        u.removeElement(i.element);
                        i.initiatePublish()
                    }, i.update(), i
                }
                return t(i, n), i.prototype.update = function () {
                    this.element && (this.closeButton = u.selectFirstElement("button.c-action-trigger.glyph-cancel", this.element), !this.closeButton || u.addEvent(this.closeButton, u.eventTypes.click, this.closeAlertAndRemoveEvent, !1))
                }, i.prototype.teardown = function () {
                    u.removeEvent(this.closeButton, u.eventTypes.click, this.closeAlertAndRemoveEvent, !1)
                }, i.prototype.publish = function (n) {
                    n.onAlertClosed()
                }, i.selector = ".m-alert", i.typeName = "Alert", i
            }(r.Publisher);
            i.Alert = f
        });
        i(["alert", "componentFactory"], function (n, t) {
            t.ComponentFactory && t.ComponentFactory.create && t.ComponentFactory.create([{
                component: n.Alert
            }])
        });
        t = this && this.__extends || function () {
            var n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (n, t) {
                    n.__proto__ = t
                } || function (n, t) {
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
                };
            return function (t, i) {
                function r() {
                    this.constructor = t
                }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }();
        n("autosuggest", ["require", "exports", "publisher", "htmlExtensions", "stringExtensions", "utility"], function (n, i, r, u, f, e) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var o = function (n) {
                function i(t, r) {
                    var o, s;
                    return r === void 0 && (r = null), o = n.call(this, t, e.isNumber(r) ? {} : r) || this, o.hideNoResults = !1, o.suggestionClickListeners = [], o.publishInProgress = [], o.updateSuggestions = function (n) {
                        o.publishInProgress.length > 0 && o.publishInProgress.pop();
                        var t = o.reconstructMenu(n);
                        o.show();
                        t && o.setFocusToInput()
                    }, o.handleInputKeyup = function (n) {
                        o.input && o.input.value && (o.cachedInputValue = o.input.value);
                        switch (e.getKeyCode(n)) {
                            case 27:
                                break;
                            case 38:
                                break;
                            case 40:
                                break;
                            default:
                                o.initiatePublish({
                                    notification: "onMatchPatternChanged",
                                    properties: {
                                        pattern: o.input.value
                                    }
                                });
                                o.publishInProgress.push(!0)
                        }
                    }, o.handleInputKeydown = function (n) {
                        switch (e.getKeyCode(n)) {
                            case 9:
                            case 27:
                                o.hide();
                                break;
                            case 38:
                                u.preventDefault(n);
                                o.handleInputArrowKey(!0);
                                break;
                            case 40:
                                u.preventDefault(n);
                                o.handleInputArrowKey(!1)
                        }
                    }, o.handleMenuKeydown = function (n) {
                        switch (e.getKeyCode(n)) {
                            case 13:
                                o.selectSuggestion(o.selectedSuggestion, !0);
                                break;
                            case 27:
                                o.hide();
                                break;
                            case 38:
                                u.preventDefault(n);
                                o.handleMenuArrowKey(!0);
                                break;
                            case 40:
                                u.preventDefault(n);
                                o.handleMenuArrowKey(!1)
                        }
                    }, o.handleClickWhenMenuOpen = function (n) {
                        o.closeMenuFromClick(u.getEventTargetOrSrcElement(n))
                    }, o.handleInputClick = function () {
                        o.show()
                    }, o.selectSuggestionFromClick = function (n) {
                        o.selectSuggestion(n, !0)
                    }, o.buildStringSuggestionHtml = function (n, t) {
                        var i = document.createElement("li");
                        i.setAttribute("class", "c-menu-item");
                        i.setAttribute("role", "presentation");
                        i.setAttribute("title", n);
                        i.innerHTML = '<span role="option" aria-label="' + n + '" tabindex="0">' + o.highlight(n) + "<\/span>";
                        u.addAttribute(i, t);
                        o.ignoreNextDOMChange = !0;
                        o.menu.appendChild(i)
                    }, o.buildProductSuggestionHtml = function (n, t) {
                        var h = n.category ? " - " + n.category : "",
                            r = document.createElement("li"),
                            i, e, s, c, l;
                        r.setAttribute("class", "c-menu-item");
                        r.setAttribute("role", "presentation");
                        r.setAttribute("title", n.title + h);
                        o.searchable(r, !1);
                        i = document.createElement("a");
                        i.setAttribute("role", "option");
                        i.setAttribute("aria-label", n.title + h + " - Link");
                        i.setAttribute("class", "f-product");
                        i.setAttribute("href", n.targetUrl);
                        u.addAttribute(i, t);
                        e = "";
                        n.imageSrc && (s = "", c = 'class="c-image' + (n.isImageRound ? " f-round" : "") + '"', f.isNullOrWhiteSpace(n.backgroundColor) || n.backgroundColor.toLowerCase() === "transparent" || (s = 'style="background:' + n.backgroundColor + '"'), e = "<img " + c + ' src="' + n.imageSrc + '" ' + s + ' role="none"/>');
                        l = n.category ? '<span class="c-meta-text">' + n.category + "<\/span>" : "";
                        i.innerHTML = e + "<div><span>" + o.highlight(n.title) + "<\/span>" + l + "<\/div>";
                        r.appendChild(i);
                        o.ignoreNextDOMChange = !0;
                        o.menu.appendChild(r)
                    }, o.setFocusToInput = function () {
                        o.input && o.input.focus()
                    }, e.isNumber(r) ? s = r : r && (e.isNumber(r.scrollLimit) && (s = r.scrollLimit), r.hideNoResults && (o.hideNoResults = r.hideNoResults)), o.itemScrollCount = Math.max(i.minimumItemScrollCount, s || i.defaultItemScrollCount), o.update(), o
                }
                return t(i, n), i.prototype.update = function () {
                    this.element && (this.input = u.selectFirstElement("[aria-controls=" + this.element.id + "]"), this.input) && (this.menu = u.selectFirstElement(".c-menu", this.element), this.menu) && (this.hideNoResults || (this.noResults = u.selectFirstElement(".f-auto-suggest-no-results", this.element), this.noResults && (this.noResultsItem = u.selectFirstElement(".c-menu-item span", this.noResults)), this.noResultsItem && (this.noResultsString = this.noResultsItem.textContent)), this.form = this.element.parentElement, this.form) && (this.addMenuStateAnnouncement(), u.addEvent(this.input, u.eventTypes.keyup, this.handleInputKeyup, !0), u.addEvent(this.input, u.eventTypes.keydown, this.handleInputKeydown, !0), u.addEvent(this.input, u.eventTypes.click, this.handleInputClick, !0), this.reconstructMenu(null, !0))
                }, i.prototype.teardown = function () {
                    u.removeEvent(this.input, u.eventTypes.keyup, this.handleInputKeyup, !0);
                    u.removeEvent(this.input, u.eventTypes.keydown, this.handleInputKeydown, !0);
                    u.removeEvent(this.input, u.eventTypes.click, this.handleInputClick, !0);
                    u.removeEvent(document.body, u.eventTypes.click, this.handleClickWhenMenuOpen);
                    for (var n = 0; n < this.suggestions.length; ++n) u.removeEvent(this.suggestions[n], u.eventTypes.keydown, this.handleMenuKeydown), u.removeEvent(this.suggestions[n], u.eventTypes.click, this.suggestionClickListeners[n++]);
                    this.form = null;
                    this.input = null;
                    this.menu = null;
                    this.noResults = null;
                    this.suggestions = null;
                    this.selectedSuggestion = null
                }, i.prototype.searchable = function (n, t) {
                    var i = "data-is-searchable";
                    if (t === undefined) return n.getAttribute(i) !== "false";
                    n.setAttribute(i, t.toString())
                }, i.prototype.publish = function (n, t) {
                    if (n.onMatchPatternChanged && t.notification === "onMatchPatternChanged") n.onMatchPatternChanged(t.properties);
                    else if (n.onSuggestionSelected && t.notification === "onSuggestionSelected") n.onSuggestionSelected(t.properties)
                }, i.prototype.handleInputArrowKey = function (n) {
                    var t = this.suggestions,
                        r = this.suggestions ? this.suggestions.length : 0,
                        i;
                    r > 0 && (!this.selectedSuggestion && n ? this.selectSuggestion(t[r - 1]) : this.selectedSuggestion ? (i = t.indexOf(this.selectedSuggestion), n && i === 0 ? this.selectSuggestion(t[r - 1]) : n ? this.selectSuggestion(t[i - 1]) : i === r - 1 ? this.selectSuggestion(t[0]) : this.selectSuggestion(t[i + 1])) : this.selectSuggestion(t[0]))
                }, i.prototype.handleMenuArrowKey = function (n) {
                    var i = this.suggestions,
                        r = this.suggestions ? this.suggestions.length : 0,
                        t;
                    r > 0 && (t = i.indexOf(this.selectedSuggestion), n && t === 0 || !n && t === r - 1 ? (this.input.value = this.cachedInputValue, this.setFocusToInput(), this.selectedSuggestion.setAttribute("data-selected", "false"), this.selectedSuggestion = null) : n ? this.selectSuggestion(i[t - 1]) : this.selectSuggestion(i[t + 1]))
                }, i.prototype.selectSuggestion = function (n, t) {
                    var i, r, f;
                    (t === void 0 && (t = !1), n) && (this.selectedSuggestion && this.selectedSuggestion.setAttribute("data-selected", "false"), this.selectedSuggestion = n, this.selectedSuggestion.setAttribute("data-selected", "true"), u.selectFirstElement("li > a, li > span", this.selectedSuggestion).focus(), i = "product", this.searchable(this.selectedSuggestion) ? (r = u.getText(this.selectedSuggestion), this.input.value = r, i = "term") : this.publishInProgress.length === 0 && (this.input.value = ""), t && (this.hide(), f = this.suggestions.indexOf(this.selectedSuggestion), this.initiatePublish({
                        notification: "onSuggestionSelected",
                        properties: {
                            srchq: this.cachedInputValue,
                            suggestion: this.selectedSuggestion,
                            suggestionType: i,
                            aslinkpos: f,
                            qrylngth: this.cachedInputValue.length,
                            resultselected: this.selectedSuggestion.innerText
                        }
                    }), this.searchable(this.selectedSuggestion) && typeof this.form.submit == "function" && this.form.submit()))
                }, i.prototype.hide = function () {
                    this.menu.setAttribute(i.ariaHidden, "true");
                    this.noResults && this.noResultsItem && (this.noResults.setAttribute(i.ariaHidden, "true"), this.noResultsItem.removeAttribute("aria-label"), this.noResultsItem.textContent = "");
                    this.form.setAttribute(i.ariaExpanded, "false");
                    u.setText(this.ariaLiveRegion, "");
                    u.removeEvent(document.body, u.eventTypes.click, this.handleClickWhenMenuOpen)
                }, i.prototype.show = function () {
                    if (f.isNullOrWhiteSpace(this.input.value)) {
                        this.hide();
                        return
                    }
                    if (this.form.setAttribute(i.ariaExpanded, "true"), this.suggestions && this.suggestions.length) u.setText(this.ariaLiveRegion, this.menuOpenLocString);
                    else {
                        !this.hideNoResults && this.noResults && this.noResultsItem && (this.noResults.setAttribute(i.ariaHidden, "false"), this.noResultsItem.setAttribute("aria-label", this.noResultsString), this.noResultsItem.textContent = this.noResultsString);
                        this.menu.setAttribute(i.ariaHidden, "true");
                        return
                    } !this.hideNoResults && this.noResults && this.noResults.setAttribute(i.ariaHidden, "true");
                    this.menu.setAttribute(i.ariaHidden, "false");
                    u.hasClass(this.menu, "f-auto-suggest-scroll") && u.css(this.menu, "maxHeight", this.suggestions[0].offsetHeight * this.itemScrollCount + "px");
                    u.addEvent(document.body, u.eventTypes.click, this.handleClickWhenMenuOpen)
                }, i.prototype.closeMenuFromClick = function (n) {
                    this.form.contains(n) || this.hide()
                }, i.prototype.reconstructMenu = function (n, t) {
                    var s = this,
                        f, o, i, h, r, e;
                    if (t === void 0 && (t = !1), this.suggestions = null, this.suggestionClickListeners = [], !t)
                        for (this.ignoreNextDOMChange = !0, u.removeInnerHtml(this.menu), f = 0, o = n; f < o.length; f++) {
                            i = o[f];
                            switch (i.type) {
                                case "string":
                                    this.buildStringSuggestionHtml(i.value, i.attributes);
                                    break;
                                case "product":
                                    this.buildProductSuggestionHtml(i.value, i.attributes)
                            }
                        }
                    for (this.suggestions = u.nodeListToArray(this.menu.children), h = function (n) {
                        u.addEvent(r.suggestions[n], u.eventTypes.keydown, r.handleMenuKeydown);
                        u.addEvent(r.suggestions[n], u.eventTypes.click, r.suggestionClickListeners[n] = function () {
                            s.selectSuggestionFromClick(s.suggestions[n])
                        })
                    }, r = this, e = 0; e < this.suggestions.length; ++e) h(e);
                    return !!this.selectedSuggestion
                }, i.prototype.addMenuStateAnnouncement = function () {
                    this.ariaLiveRegion || (this.ariaLiveRegion = document.createElement("div"), u.addClass(this.ariaLiveRegion, "x-screen-reader"), this.ariaLiveRegion.setAttribute("aria-live", "assertive"), this.input.parentNode.insertBefore(this.ariaLiveRegion, this.input.nextSibling), this.ignoreNextDOMChange = !0, this.menuOpenLocString = this.element.getAttribute("data-f-loc-menu-open") || i.menuOpenFallbackString)
                }, i.prototype.highlight = function (n) {
                    var t = new RegExp(this.input.value, "ig");
                    return n.replace(t, function (n) {
                        return "<b>" + n + "<\/b>"
                    })
                }, i.selector = ".m-auto-suggest", i.typeName = "AutoSuggest", i.menuOpenFallbackString = "results are available, use up and down arrow keys to navigate.", i.defaultItemScrollCount = 5, i.minimumItemScrollCount = 2, i.ariaHidden = "aria-hidden", i.ariaExpanded = "aria-expanded", i
            }(r.Publisher);
            i.AutoSuggest = o
        });
        i(["autosuggest"]);
        n("msccHelper", ["require", "exports"], function (n, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                function n() { }
                return n.prototype.setConsent = function () {
                    var n = window.mscc,
                        t;
                    n && !n.hasConsent() && (n.setConsent(), t = document.querySelector("header.c-uhfh.context-uhf.f-transparent.js"), t && t.setAttribute("style", "margin-top:0px"))
                }, n
            }();
            t.MsccHelper = i
        });
        n("navigationMenus", ["require", "exports", "utility", "htmlExtensions", "jquery", "msccHelper"], function (n, t, i, r, u, f) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = ".c-uhfh",
                k = ".js-global-head",
                s = "#uhf-c-nav",
                h = "#uhf-g-nav",
                et = "#uhf-l-nav",
                e = ".js-nav-menu",
                g = ".js-subm-uhf-nav-link",
                c = ".f-mobile-title .c-action-trigger.glyph-chevron-left",
                l = ".f-mobile-title .c-action-trigger.glyph-chevron-right",
                y = ".js-global-head .c-action-trigger.glyph-global-nav-button",
                v = ".js-mobile-title",
                d = ".glyph-shopping-cart",
                a = "aria-expanded",
                p = "ms.interactiontype",
                nt = "aria-hidden",
                tt = "f-opened",
                it = "f-closed",
                w = "f-flip",
                b = "f-current",
                rt = new f.MsccHelper,
                ot = 400,
                ut = 10,
                ft = "#magicTriangle",
                st = function () {
                    function n() { }
                    return n.closeMenu = function (t, i) {
                        var f = t.filter(n.$menus),
                            e, o;
                        f.length !== 0 && (e = f.children("button"), e.length !== 0) && (e.attr(a, "false"), f.children("ul").attr(nt, "true"), e.attr(p) !== undefined && e.attr(p, "14"), i && e.focus(), u(w, f).removeClass(w), o = r.getDirection() === r.Direction.left ? "margin-left" : "margin-right", u(" > ul", f).css(o, "").height(""), f.closest("ul").height(""))
                    }, n.openMenu = function (t) {
                        var f = t.filter(n.$menus),
                            s, h, c, l, g, tt;
                        if (f.length !== 0 && (s = f.children("button"), s.length !== 0)) {
                            s.attr(a, "true");
                            f.children("ul").attr(nt, "false");
                            s.attr(p) !== undefined && s.attr(p, "15");
                            var e = f.find("ul").first(),
                                i = e[0].getBoundingClientRect(),
                                v = u(window).width(),
                                y = r.getDirection();
                            if (f.is(n.$levelTwoMenus)) {
                                if (h = f.parent("ul"), h.height(""), e.height(""), c = h.height(), l = e.height(), c > l ? e.height(c) : c < l && h.height(l), g = y === r.Direction.left && i.right > v || y === r.Direction.right && i.left < 0, e.hasClass(w)) {
                                    n.isFlipped = !0;
                                    return
                                }
                                g && (h.find("ul").addClass(w), n.isFlipped = !0)
                            } else if (!n.isMobile() && f.is(n.$menus.not(n.$levelTwoMenus))) {
                                var b = e[0].offsetWidth,
                                    o = 0,
                                    k = 20,
                                    d = e.hasClass("f-multi-column");
                                d && i.right > v ? (o = i.right - v, k = Math.abs(o - i.left) / 2, o += k) : d && i.left < 0 ? o = -i.left + k : !d && i.left + b * 2 > v && i.right - b * 2 < 0 && (o = b - f[0].offsetWidth);
                                tt = y === r.Direction.left ? "marginLeft" : "marginRight";
                                e[0].style[tt] = -o + "px"
                            }
                        }
                    }, n.isOpen = function (n) {
                        return n.children("button").attr(a) === "true"
                    }, n.toggleMenu = function (t, i) {
                        if (n.isOpen(t)) {
                            var r = u(e, t).add(t);
                            n.closeMenu(r, i)
                        } else n.closeAllOpenMenus(t.parents()), n.openMenu(t)
                    }, n.wasClickFromKeyboard = function (n) {
                        return n.keyCode === 13
                    }, n.isMobile = function () {
                        return window.innerWidth < 1024
                    }, n.getOriginalGlobalTitle = function () {
                        return u(o + " " + v).data().globalTitle
                    }, n.closeIfBlurred = function (t) {
                        !u(t.target).is(".c-uhf-nav-link") && u(t.target).parents().is(s + ",\n            " + h + ", " + et) || u(t.target).is("#uhfLogoCat") || u(t.target).parents().is(".c-uhf-menu") || n.closeAllOpenMenus()
                    }, n.handleEscapeCloseMenu = function (t) {
                        if (t.keyCode === 27 && t.currentTarget === u(t.target).closest(e)[0]) {
                            var i = u(t.currentTarget).closest(e);
                            n.isOpen(i) ? n.closeMenu(i, !0) : n.closeMenu(i.parent().closest(e), !0)
                        }
                    }, n.closeOpenSiblingMenusOnFocusChange = function (t) {
                        var i = u(t.target).closest(e).first(),
                            r;
                        i.is(n.$menus) && (r = i.parents(e), n.closeAllOpenMenus(r.add(i)))
                    }, n.closeAllOpenMenus = function (t) {
                        n.closeMenu(u(' > [aria-expanded="true"]', n.$menus).parent().not(t))
                    }, n.initShowMagicTriangle = function () {
                        if (n.showMagicTriangle === !0 && u(ft).length === 0) {
                            u(h).attr("style", "opacity:0.90;z-index:999");
                            u(h).find("ul").attr("style", "opacity:0.90");
                            u(s).attr("style", "opacity:0.90;z-index:999");
                            u(s).find("ul").attr("style", "opacity:0.90");
                            var t = '<svg style="height:100%;width:100%;position:absolute;left:0;top:0;background:#fffff0;opacity:0.4;z-index:100">';
                            t += '<polygon id="magicTriangle" points="0,0 0,0 0,0" style="fill:gray;"><\/polygon>';
                            t += "<\/svg>";
                            u("body").prepend(t)
                        }
                    }, n.init = function () {
                        u(o).addClass("js").on("keyup", n.menuSelector, n.handleEscapeCloseMenu);
                        n.originalMobileTitle = u(v).text();
                        n.$menus = u(e);
                        n.$levelTwoMenus = u(e + " " + e);
                        n.$multiColumnMenus = u(".f-multi-column " + e);
                        n.pageDirection = r.getDirection()
                    }, n.clearCustomMenuHeights = function () {
                        u(" > ul[style]", n.$menus).height("")
                    }, n.handleMoveIntoDesktopViewport = function () {
                        n.openMenu(n.$multiColumnMenus);
                        n.clearCustomMenuHeights();
                        n.$multiColumnMenus.children("button").attr("tabindex", -1);
                        n.$menus = n.$menus.not(n.$multiColumnMenus);
                        n.$levelTwoMenus = n.$levelTwoMenus.not(n.$multiColumnMenus);
                        u(".js-cat-head").show();
                        u(s).show();
                        u(h).show();
                        u("#meControl").show();
                        u(o + " .c-search").show();
                        u(o + " " + d).show();
                        u(document).off("click", n.closeIfBlurred).on("click", n.closeIfBlurred);
                        u(document).off("focusin", n.closeIfBlurred).on("focusin", n.closeIfBlurred);
                        u(y).off("click", n.toggleHamburger);
                        u(c).off("click", n.handleMobilePrimaryButton);
                        u(l).off("click", n.handleMobileSecondaryButton);
                        u(o).off("click", n.handleMobileMenuClick).off("click", n.handleDesktopMenuClick).on("click", n.handleDesktopMenuClick).off("focusin", n.closeOpenSiblingMenusOnFocusChange).on("focusin", n.closeOpenSiblingMenusOnFocusChange).off("touchstart", n.setTouched).on("touchstart", n.setTouched).off("pointerenter", n.setTouchedIfPointer).on("pointerenter", n.setTouchedIfPointer).off("mouseout", n.handleDesktopMenuMouseLeave).on("mouseout", n.handleDesktopMenuMouseLeave);
                        if (n.resetTitleMobileText(), n.closeAllOpenMenus(), u(o).data("magict") === !0 && (n.isMagicTriangleEnabled = !0), n.isMagicTriangleEnabled && u(o).data("showmagict") === !0 && (n.showMagicTriangle = !0, n.initShowMagicTriangle()), n.isMagicTriangleEnabled) u(e + " " + e).off("mousemove", n.handleDesktopMenuMouseEnter).on("mousemove", n.handleDesktopMenuMouseEnter);
                        else u(o).off("mouseover", n.handleDesktopMenuMouseEnter).on("mouseover", n.handleDesktopMenuMouseEnter)
                    }, n.setTouchedIfPointer = function (t) {
                        t && t.originalEvent.pointerType === "touch" && n.setTouched()
                    }, n.setTouched = function () {
                        n.wasTouched = !0
                    }, n.handleDesktopMenuClick = function (t) {
                        var i, r;
                        if (u(t.target).is(g)) {
                            n.closeAllOpenMenus();
                            return
                        }
                        t.target.tagName !== "A" && (i = u(t.target).closest(e), i.is(n.$menus)) && ((t.preventDefault(), u("> a, > button", i).hasClass("f-hidden")) || (rt.setConsent(), r = n.wasClickFromKeyboard(t), n.toggleMenu(i, r)))
                    }, n.calcTriangleArea = function (n, t, i) {
                        return Math.abs((n.x * (t.y - i.y) + t.x * (i.y - n.y) + i.x * (n.y - t.y)) / 2)
                    }, n.isMagicTriangleMenu = function (t) {
                        return !!n.$prevMenu && t[0] === n.$prevMenu[0]
                    }, n.isPointInMagicTriangle = function () {
                        var t = n.calcTriangleArea(n.pointA, n.pointB, n.pointC),
                            i = n.calcTriangleArea(n.pointA, n.pointB, n.currentPoint),
                            r = n.calcTriangleArea(n.pointB, n.pointC, n.currentPoint),
                            u = n.calcTriangleArea(n.pointC, n.pointA, n.currentPoint);
                        return t !== 0 && t === i + r + u
                    }, n.resetMagicTriangle = function (t) {
                        t === void 0 && (t = !0);
                        n.clearMagicTriangleTimer();
                        n.isMagicTriangleSet = !1;
                        t && (n.pointA = {
                            x: 0,
                            y: 0
                        }, n.pointB = {
                            x: 0,
                            y: 0
                        }, n.pointC = {
                            x: 0,
                            y: 0
                        }, n.renderMagicTriangle(), n.$prevMenu = undefined)
                    }, n.renderMagicTriangle = function () {
                        if (n.showMagicTriangle) {
                            var t = n.pointA.x + "," + n.pointA.y;
                            t += " " + n.pointB.x + "," + n.pointB.y;
                            t += " " + n.pointC.x + "," + n.pointC.y;
                            u(ft).attr("points", t)
                        }
                    }, n.setupMagicTriangle = function (t) {
                        n.setFirstPointOfTriangle();
                        var i = t[0].getBoundingClientRect();
                        !n.isFlipped && n.pageDirection === r.Direction.left || n.isFlipped && n.pageDirection === r.Direction.right ? (n.pointB = {
                            x: i.left + window.pageXOffset,
                            y: i.top + window.pageYOffset
                        }, n.pointC = {
                            x: i.left + window.pageXOffset,
                            y: i.bottom + window.pageYOffset
                        }) : (n.pointB = {
                            x: i.right + window.pageXOffset,
                            y: i.top + window.pageYOffset
                        }, n.pointC = {
                            x: i.right + window.pageXOffset,
                            y: i.bottom + window.pageYOffset
                        });
                        n.isMagicTriangleSet = !0;
                        n.renderMagicTriangle()
                    }, n.clearMagicTriangleTimer = function () {
                        clearTimeout(n.magicTriangleTimer);
                        n.$timerTargetMenu = undefined
                    }, n.delayToggleMagicTriangleMenus = function (t) {
                        n.$timerTargetMenu && t[0] === n.$timerTargetMenu[0] || (n.clearMagicTriangleTimer(), n.$timerTargetMenu = t, n.magicTriangleTimer = setTimeout(n.toggleMagicTriangleMenus, ot, t))
                    }, n.haveMenuItems = function (n) {
                        return u(n.find("ul").first()).length !== 0
                    }, n.toggleMagicTriangleMenus = function (t) {
                        var i = !1,
                            r = n.isOpen(t),
                            u;
                        (r || (n.$prevMenu ? (n.closeMenu(n.$prevMenu), n.$prevMenu = undefined) : i = !0), n.haveMenuItems(t)) && (i && n.closeAllOpenMenus(t.parents(e)), u = t.find("ul").first(), n.isFlipped = !1, r || n.openMenu(t), n.setupMagicTriangle(u), n.$prevMenu = t)
                    }, n.setFirstPointOfTriangle = function () {
                        n.pointA = n.currentPoint;
                        !n.isFlipped && n.pageDirection === r.Direction.left || n.isFlipped && n.pageDirection === r.Direction.right ? n.pointA.x -= ut : n.pointA.x += ut
                    }, n.isPrevMenuSibling = function (t) {
                        return !!n.$prevMenu && t.siblings().is(n.$prevMenu)
                    }, n.processMagicTriangle = function (t, i) {
                        n.currentPoint = {
                            x: t.pageX,
                            y: t.pageY
                        };
                        n.isMagicTriangleSet ? n.isMagicTriangleMenu(i) ? (n.clearMagicTriangleTimer(), n.setFirstPointOfTriangle(), n.showMagicTriangle && u(t.target.nextElementSibling).is("ul") && n.renderMagicTriangle()) : n.isPrevMenuSibling(i) ? n.isPointInMagicTriangle() ? n.delayToggleMagicTriangleMenus(i) : n.resetMagicTriangle(!1) : n.resetMagicTriangle() : n.toggleMagicTriangleMenus(i)
                    }, n.handleDesktopMenuMouseEnter = function (t) {
                        var i = u(t.target).closest(e);
                        if (n.wasTouched || !i.is(n.$levelTwoMenus)) {
                            n.wasTouched = !1;
                            return
                        }
                        n.isMagicTriangleEnabled ? n.processMagicTriangle(t, i) : (n.closeAllOpenMenus(i.parents()), n.openMenu(i))
                    }, n.handleDesktopMenuMouseLeave = function (t) {
                        var i = u(t.target).closest(e);
                        if (n.wasTouched || !i.is(n.$levelTwoMenus) || i[0] && i[0].contains(t.relatedTarget)) {
                            n.wasTouched = !1;
                            return
                        }
                        n.isMagicTriangleEnabled ? t.relatedTarget && u(t.relatedTarget).closest(e).is(n.$levelTwoMenus) || (n.currentPoint = {
                            x: t.pageX,
                            y: t.pageY
                        }, n.isPointInMagicTriangle() || (n.haveMenuItems(i) ? n.closeMenu(i) : i.parents(e).length > 1 && n.closeMenu(u(i.parents(e).first()))), n.resetMagicTriangle()) : n.closeMenu(i)
                    }, n.handleMobileMenuClick = function (t) {
                        var i, r;
                        if (u(t.target).is("nav a")) {
                            n.toggleHamburger();
                            return
                        } (i = u(t.target).closest(e), i.is(n.$menus) && !n.isOpen(i)) && (r = u(t.target).text(), n.setTitleMobileText(r), u(c).show(), u(l).hide(), n.openMenu(i))
                    }, n.handleMoveIntoMobileViewport = function () {
                        n.$menus = n.$menus.add(n.$multiColumnMenus);
                        n.$multiColumnMenus.children("button").attr("tabindex", null);
                        u(l).hide();
                        u(s).hide();
                        u(h).hide();
                        u(y).attr(a, "false");
                        u(k).addClass(it).removeClass(tt);
                        u("#meControl").hide();
                        u(o + " .c-search").show();
                        u(o + " " + d).show();
                        u(document).off("click", n.closeIfBlurred);
                        u(document).off("focusin", n.closeIfBlurred);
                        u(y).off("click", n.toggleHamburger).on("click", n.toggleHamburger);
                        u(c).off("click", n.handleMobilePrimaryButton).on("click", n.handleMobilePrimaryButton);
                        u(l).off("click", n.handleMobileSecondaryButton).on("click", n.handleMobileSecondaryButton);
                        u(o).off("touchstart", n.setTouched).off("pointerenter", n.setTouchedIfPointer).off("mouseout", n.handleDesktopMenuMouseLeave).off("click", n.handleDesktopMenuClick).off("click", n.handleMobileMenuClick).on("click", n.handleMobileMenuClick).off("focusin", n.closeOpenSiblingMenusOnFocusChange).off("click", n.handleDesktopMenuClick);
                        n.isMagicTriangleEnabled ? u(e + " " + e).off("mousemove", n.handleDesktopMenuMouseEnter) : u(o).off("mouseover ", n.handleDesktopMenuMouseEnter);
                        n.isMagicTriangleEnabled = !1;
                        n.showMagicTriangle = !1;
                        n.closeAllOpenMenus()
                    }, n.setTitleMobileText = function (n) {
                        u(v).text(n)
                    }, n.hasCategoryMenu = function () {
                        return u(s).length > 0
                    }, n.hasGlobalNavItems = function () {
                        return u(h).length > 0
                    }, n.resetTitleMobileText = function () {
                        var i = u(v),
                            t = n.originalMobileTitle;
                        t && i.text(t)
                    }, n.handleMobilePrimaryButton = function () {
                        var r = u(' > [aria-expanded="true"]', n.$menus),
                            t, i;
                        r[0] ? (t = r.last().parent(e), n.closeMenu(t), i = !u(' > [aria-expanded="true"]', n.$menus)[0], i && !u(s).is(":visible") ? (u(c).hide(), n.hasCategoryMenu() && u(l).show(), n.setTitleMobileText(n.getOriginalGlobalTitle())) : i && u(s).is(":visible") ? (n.resetTitleMobileText(), n.hasGlobalNavItems() || u(c).hide()) : n.setTitleMobileText(t.parents(e).first().children("button").first().text())) : (u(s).hide(), u(h).show(), u(c).hide(), n.hasCategoryMenu() && u(l).show(), n.setTitleMobileText(n.getOriginalGlobalTitle()))
                    }, n.handleMobileSecondaryButton = function () {
                        u(h).hide();
                        u(s).show();
                        u(c).show();
                        u(l).hide();
                        n.resetTitleMobileText()
                    }, n.toggleHamburger = function () {
                        var t = u(y),
                            i = "#meControl, " + s + ", " + h,
                            r = o + " .c-search,\n                " + o + " " + d;
                        t.attr(a) === "false" ? (u(k).addClass("f-opened").removeClass("f-closed"), u(r).hide(), u(i).show(), u("body").css("overflow-y", "hidden"), t.attr(a, "true"), n.hasCategoryMenu() && n.hasGlobalNavItems() ? (u(c).show(), u(l).hide(), u(h).hide()) : u(c + ", " + l).hide()) : (u(k).removeClass(tt).addClass(it), u(r).show(), u(i).hide(), u("body").css("overflow-y", "auto"), t.attr(a, "false"));
                        n.resetTitleMobileText();
                        n.closeAllOpenMenus();
                        rt.setConsent()
                    }, n.resetNavHighlight = function (n) {
                        r.removeClass(r.selectElements("." + b, n), b)
                    }, n.setCurrentMenuItemId = function (t) {
                        var i = null,
                            f = r.selectFirstElement(o);
                        try {
                            i = r.selectFirstElement("#" + t, f)
                        } catch (e) {
                            return
                        }
                        i && (n.resetNavHighlight(f), r.addClass(i, b), u(i).parents("ul").siblings("button").addClass(b))
                    }, n.wasTouched = !1, n.isMagicTriangleEnabled = !1, n.showMagicTriangle = !1, n.isMagicTriangleSet = !1, n.isFlipped = !1, n.currentPoint = {
                        x: 0,
                        y: 0
                    }, n.pointA = {
                        x: 0,
                        y: 0
                    }, n.pointB = {
                        x: 0,
                        y: 0
                    }, n.pointC = {
                        x: 0,
                        y: 0
                    }, n.mobilePrimaryButtonSelector = c, n.globalNavSelector = h, n.categoryNavSelector = s, n.mobileSecondaryButtonSelector = l, n.mobileTitleSelector = v, n.menuSelector = e, n.subMenuLinkSelector = g, n.uhfSelector = o, n.originalMobileTitle = "", n
                }();
            t.NavigationMenus = st
        });
        n("shoppingCart", ["require", "exports", "jquery", "htmlExtensions"], function (n, t, i, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = "x-hidden",
                f = function () {
                    function n() {
                        if (this.shoppingCartFrame = document.getElementById(n.shoppingCartFrameId), !this.shoppingCartFrame) return null;
                        var t = this.shoppingCartFrame.getAttribute("data-src");
                        t && this.shoppingCartFrame.setAttribute("src", t);
                        i(window).on("message onmessage", this.handleEvent)
                    }
                    return n.setTelemetryAttr = function (n, t, r, u) {
                        var e = i(n).attr(t),
                            f;
                        if (e) {
                            f = undefined;
                            try {
                                if (f = JSON.parse(e), !f) return;
                                f[r] = u
                            } catch (o) {
                                return
                            }
                            i(n).attr(t, JSON.stringify(f))
                        }
                    }, n.prototype.handleEvent = function (t) {
                        var s = t.originalEvent.data,
                            f = "0",
                            c = "qtyincart",
                            l = "data-m",
                            e = r.selectFirstElement(n.shoppingCartCountSelector),
                            o = r.selectFirstElement(n.shoppingCartLabel),
                            h, a;
                        if (s && s.split && e && (h = s.split("="), h[0] === "DR_Cart_Count")) {
                            if (f = h[1], f === "0") {
                                r.addClass(e, u);
                                o && r.removeClass(o, u);
                                n.setTelemetryAttr(n.shoppingCartAnchorId, l, c, f);
                                return
                            }
                            o && r.addClass(o, u);
                            r.removeClass(e, u);
                            e.innerText = f;
                            a = i(n.shoppingCartAnchorId).attr("aria-label").replace(/\d+/, f);
                            i(n.shoppingCartAnchorId).attr("aria-label", a);
                            n.setTelemetryAttr(n.shoppingCartAnchorId, l, c, f)
                        }
                    }, n.shoppingCartFrameId = "shell-cart-count", n.shoppingCartCountSelector = ".shopping-cart-amount", n.shoppingCartAnchorId = "#uhf-shopping-cart", n.shoppingCartLabel = ".c-cart-lbl", n
                }();
            t.ShoppingCart = f
        });
        t = this && this.__extends || function () {
            var n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (n, t) {
                    n.__proto__ = t
                } || function (n, t) {
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
                };
            return function (t, i) {
                function r() {
                    this.constructor = t
                }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }();
        t = this && this.__extends || function () {
            var n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (n, t) {
                    n.__proto__ = t
                } || function (n, t) {
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
                };
            return function (t, i) {
                function r() {
                    this.constructor = t
                }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }();
        n("uhfAutoSuggest", ["require", "exports", "autosuggest", "htmlExtensions", "utility", "uhfTelemetryHelper", "stringExtensions"], function (n, i, r, u, f, e, o) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var s = {
                hideNoResults: !0
            },
                h = function (n) {
                    function i() {
                        var t = n.call(this, u.selectFirstElement(i.autoSuggestSelector), s) || this,
                            h, r;
                        if (t.latestTimestampReceived = 0, t.autoSuggestCallback = function (n) {
                            var i = window.msCommonShell && window.msCommonShell.as,
                                r;
                            i && i.callback ? i.callback({
                                text: n.pattern,
                                response: t.updateSuggestions
                            }) : i && i.legacyCallback ? i.legacyCallback({
                                text: n.pattern,
                                response: t.mapLegacyCallback
                            }) : i && i.ussAPIParams && i.ussAPIParams.clientId && i.ussAPIParams.sources ? (i.ussAPIParams.query = n.pattern, i.ussAPIParams.market = i.ussAPIParams.market || t.params.market, r = t.autoSuggestUrl + "?" + $.param(i.ussAPIParams), t.ajaxCall(r, t.updateSuggestions)) : t.params && t.params.clientId && t.params.sources && (t.params.query = n.pattern, r = t.autoSuggestUrl + "?" + $.param(t.params), t.ajaxCall(r, t.updateSuggestions))
                        }, t.suggestionSelectedCallback = function (n) {
                            if (n && n.suggestion && n.suggestionType) {
                                try {
                                    e.fireBeacon(n.suggestion.firstChild.getAttribute("iris-onclick-url"))
                                } catch (r) { }
                                if (event.type && t.telemetryType) {
                                    var i = {
                                        trackType: "autosuggest",
                                        telemetryType: t.telemetryType,
                                        event: event.type === "click" ? "CL" : "KE",
                                        title: n.suggestion.title,
                                        suggestionType: n.suggestionType,
                                        aslinkpos: n.aslinkpos,
                                        qrylngth: n.qrylngth,
                                        resultselected: n.resultselected,
                                        srchq: n.srchq
                                    };
                                    e.trackEvent(i)
                                }
                            }
                        }, t.mapLegacyCallback = function (n) {
                            for (var i, r = [], u = 0, f = n.suggestions; u < f.length; u++) i = f[u], i.image && i.title ? r.push({
                                type: "product",
                                value: {
                                    title: i.title,
                                    targetUrl: i.target,
                                    imageSrc: i.image
                                }
                            }) : i.title && r.push({
                                type: "string",
                                value: i.title
                            });
                            t.updateSuggestions(r)
                        }, t.ajaxCall = function (n, i) {
                            var u = Date.now(),
                                r = new XMLHttpRequest,
                                f = t;
                            r.open("GET", n, !0);
                            r.onreadystatechange = function () {
                                if (this.readyState === 4 && this.status >= 200 && this.status < 400) try {
                                    f.processJsonData(u, JSON.parse(this.responseText), i)
                                } catch (n) { }
                            };
                            r.send();
                            r = null
                        }, t.responseHandlers = {
                            Term: function (n) {
                                var i = [];
                                return t.telemetryType === "wedcs" && i.concat(t.getWedcsAttributes(n.Txt)), {
                                    type: "string",
                                    value: n.Txt,
                                    attributes: i
                                }
                            },
                            Product: function (n) {
                                for (var r, s, h = null, u = [], c = !1, f = 0, l = n.Metas; f < l.length; f++) {
                                    if (r = l[f], r.Key === "AppBgColor") {
                                        h = r.Value;
                                        continue
                                    }
                                    if (r.Key === "IrisBiClickBeacon") {
                                        c = !0;
                                        u.push({
                                            name: "iris-onclick-url",
                                            value: r.Value
                                        });
                                        continue
                                    }
                                    if (r.Key === "IrisBiImpressionBeacon") {
                                        e.fireBeacon(r.Value);
                                        continue
                                    }
                                }
                                return t.telemetryType === "wedcs" && u.concat(t.getWedcsAttributes(n.Title)), s = c && !o.isNullOrWhiteSpace(n.Source) ? n.Source : t.familyNames[n.Source], {
                                    type: "product",
                                    value: {
                                        title: n.Title,
                                        category: s,
                                        backgroundColor: h,
                                        imageSrc: i.transformImageUrl(n.ImageUrl),
                                        targetUrl: n.Url,
                                        isImageRound: n.Source === "MusicArtists" || n.Source === "VideoActor"
                                    },
                                    attributes: u
                                }
                            }
                        }, t.configurationElement = u.selectFirstElement(i.configElementSelector), t.configurationElement) {
                            t.autoSuggestUrl = t.configurationElement.getAttribute(i.apiUrlAttribute);
                            h = u.selectFirstElement("[" + i.telemetryAttribute + "]", t.configurationElement);
                            h && (t.telemetryType = h.getAttribute(i.telemetryAttribute));
                            r = void 0;
                            try {
                                r = f.parseJson(t.configurationElement.getAttribute(i.configDataAttribute))
                            } catch (c) { }
                            t.autoSuggestUrl && r && r.queryParams && (t.params = r.queryParams, t.familyNames = r.familyNames);
                            t.subscribe({
                                onMatchPatternChanged: t.autoSuggestCallback,
                                onSuggestionSelected: t.suggestionSelectedCallback
                            })
                        }
                        return t
                    }
                    return t(i, n), i.transformImageUrl = function (n) {
                        return n && n.indexOf(i.badImageDomain) === 0 ? n.replace(i.badImageDomain, i.goodImageDomain) : n
                    }, i.prototype.processJsonData = function (n, t, i) {
                        var r, f, h, u, e, c, o, l, s;
                        if (t && t.ResultSets && !(n < this.latestTimestampReceived)) {
                            for (this.latestTimestampReceived = n, r = [], f = 0, h = t.ResultSets; f < h.length; f++)
                                if (u = h[f], u.Source.toLowerCase().indexOf("-terms") !== -1)
                                    for (e = 0, c = u.Suggests; e < c.length; e++) s = c[e], r.push(this.responseHandlers.Term(s));
                                else if (u.Source.toLowerCase().indexOf("-products") !== -1)
                                    for (o = 0, l = u.Suggests; o < l.length; o++) s = l[o], r.push(this.responseHandlers.Product(s));
                            r && i(r)
                        }
                    }, i.prototype.getWedcsAttributes = function (n) {
                        var t = [];
                        return n.length > 0 && (t.push({
                            name: "ms.title",
                            value: n
                        }), t.push({
                            name: "ms.cmpnm",
                            value: n
                        }), t.push({
                            name: "ms.cn",
                            value: n
                        })), t
                    }, i.autoSuggestSelector = "#universal-header-search-auto-suggest-transparent", i.configElementSelector = ".js-global-head .c-search", i.configDataAttribute = "data-seautosuggest", i.apiUrlAttribute = "data-seautosuggestapi", i.telemetryAttribute = "data-tel", i.badImageDomain = "//compass.", i.goodImageDomain = "https://compass-ssl.", i
                }(r.AutoSuggest);
            i.UhfAutoSuggest = h
        });
        t = this && this.__extends || function () {
            var n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (n, t) {
                    n.__proto__ = t
                } || function (n, t) {
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
                };
            return function (t, i) {
                function r() {
                    this.constructor = t
                }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }();
        t = this && this.__extends || function () {
            var n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (n, t) {
                    n.__proto__ = t
                } || function (n, t) {
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
                };
            return function (t, i) {
                function r() {
                    this.constructor = t
                }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }();
        n("uhfCookieAlert", ["require", "exports", "htmlExtensions", "utility", "publisher"], function (n, i, r, u, f) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var e = function (n) {
                function i(t) {
                    var i = n.call(this, t) || this,
                        f;
                    return (i.cookieAlertElement = t, i.closeSelector = "button.c-action-trigger.glyph-cancel", i.cookieName = "uhf_hide_cn", i.hiddenClass = "x-hidden", i.msccCookieName = "MSCC", i.getHeight = function () {
                        return i.cookieAlertElement ? r.getClientRect(i.cookieAlertElement).height : 0
                    }, i.closeAndSetCookie = function () {
                        u.setCookie(i.cookieName, "true", "/", 365);
                        r.addClass(i.cookieAlertElement, i.hiddenClass);
                        i.initiatePublish({
                            height: i.getHeight()
                        })
                    }, !t || !(u.getCookie(i.cookieName) !== "true") || u.getCookie(i.msccCookieName) !== null) ? i : (r.removeClass(i.cookieAlertElement, i.hiddenClass), f = r.selectFirstElement(i.closeSelector, t), r.addEvent(f, r.eventTypes.click, i.closeAndSetCookie), i)
                }
                return t(i, n), i.prototype.publish = function (n, t) {
                    n.onBannerClosed(t)
                }, i
            }(f.Publisher);
            i.UhfCookieAlert = e
        });
        n("uhfCookieAuditor", ["require", "exports", "htmlExtensions", "stringExtensions", "uhfTelemetryHelper"], function (n, t, i, r, u) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f;
            (function (n) {
                function t() {
                    try {
                        var n = i.selectFirstElement(".c-uhfh").getAttribute("data-ckrate");
                        return Math.random() < parseFloat(n)
                    } catch (t) {
                        return !1
                    }
                }

                function f() {
                    if (t() && window.btoa && Array.prototype.map) {
                        var n = window.btoa(document.cookie.split(";").map(function (n) {
                            return r.trim(n.substr(0, n.indexOf("=")))
                        }).sort().join(";")),
                            i = "https://uhf.microsoft.com/_log?c=" + n + "&h=" + window.location.hostname;
                        u.fireBeacon(i)
                    }
                }
                n.audit = f
            })(f = t.UhfCookieAuditor || (t.UhfCookieAuditor = {}))
        });
        n("uhfGreenId", ["require", "exports", "htmlExtensions", "stringExtensions"], function (n, t, i, r) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = function () {
                function n() { }
                return n.prototype.createGreenIdIframe = function () {
                    var t = i.selectFirstElement("#uhf-footer"),
                        u = window.mscc,
                        n;
                    if (t !== null) {
                        n = document.createElement("iframe");
                        n.id = "uhfGreenId";
                        n.setAttribute("role", "none");
                        var f = t.getAttribute("data-uhf-green-id"),
                            e = t.getAttribute("data-uhf-mscc-rq"),
                            o = "https://fpt.microsoft.com/tags?session_id=" + f;
                        n.src = o;
                        r.isNullOrWhiteSpace(f) || (!r.isNullOrWhiteSpace(e) && e === "false" || typeof u == "undefined" || u.hasConsent()) && document.body.appendChild(n)
                    }
                }, n
            }();
            t.UhfGreenId = u
        });
        n("uhfLanguageToggle", ["require", "exports", "htmlExtensions", "stringExtensions", "navigationMenus"], function (n, t, i, r, u) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var f = "#uhf-l-nav",
                e = function () {
                    function n(t) {
                        var r = this;
                        this.handleLangugeToggleClick = function () {
                            u.NavigationMenus.isOpen($(n.instance.languageToggleElement)) || n.instance.createLanguageToggleUrls()
                        };
                        this.setLangLocaleInUrls = function (n, t, i) {
                            n.setAttribute("href", r.currentUrl.replace("/" + t + "/", "/" + i + "/"))
                        };
                        this.createLangLocaleArray = function (n, t) {
                            var i = [];
                            return n && t.match(n) && (i = t.match(n)[0].split("-")), i
                        };
                        this.languageToggleElement = t;
                        i.removeEvent(this.languageToggleElement, i.eventTypes.click, this.handleLangugeToggleClick);
                        i.addEvent(this.languageToggleElement, i.eventTypes.click, this.handleLangugeToggleClick)
                    }
                    return n.prototype.createLanguageToggleUrls = function (n) {
                        var o, t, f, e, u, h, c, s, l;
                        if ((n === void 0 && (n = window.location.href), this.currentUrl = n.toLowerCase(), o = i.selectFirstElement("ul", this.languageToggleElement), t = i.selectElements("a", this.languageToggleElement), o && t) && (f = o.getAttribute("data-localsettings"), f))
                            for (e = this.createLangLocaleArray(f, this.currentUrl), u = 0, h = t.length; u < h; u++) c = r.trim(t[u].getAttribute("href")), s = t[u].getAttribute("lang"), c != null && !!s && e && e.length > 1 && (l = (s + "-" + e[1]).toLowerCase(), this.setLangLocaleInUrls(t[u], f, l))
                    }, n.instance = null, n.init = function () {
                        var t = i.selectFirstElement(f);
                        t && n.instance === null && (n.instance = new n(t))
                    }, n
                }();
            t.UhfLanguageToggle = e
        });
        n("uhfMeControl", ["require", "exports", "uhfMeControlLoader"], function (n, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function () {
                function n() {
                    i.Loader.init()
                }
                return n.selector = ".js-global-head", n
            }();
            t.UhfMeControl = r
        });
        n("uhfMeControlLoader", ["require", "exports", "jquery", "navigationMenus", "universalHeader", "utility", "htmlExtensions", "msccHelper"], function (n, t, i, r, u, f, e, o) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s;
            (function (n) {
                function b() {
                    var n = t;
                    if (n) n.events.onEventLog("loadMeControl", {
                        type: "qos",
                        success: "0",
                        errorCode: "LoadFailed: Reverted to fallback",
                        duration: w
                    })
                }

                function l(n) {
                    if (n && (n.extensibleLinks && t.extensibleLinks && (n.extensibleLinks.push.apply(n.extensibleLinks, t.extensibleLinks), t.extensibleLinks = null), t = i.extend(!0, {}, t, n)), t.enabled)
                        if (window.MSA && window.MSA.MeControl) window.MSA.MeControl.Loader.load(t);
                        else {
                            var r = setTimeout(function () {
                                b()
                            }, w);
                            window.onMeControlReadyToLoad = function () {
                                t.events.onEventLog("loadMeControl", {
                                    type: "qos",
                                    success: "1"
                                });
                                clearTimeout(r);
                                window.onMeControlReadyToLoad = null;
                                window.MSA.MeControl.Loader.load(t)
                            }
                        }
                }

                function a(n) {
                    var t = document.createElement("a");
                    return t.href = n, t.href
                }

                function k(n) {
                    n != null && (n.rpData.aadInfo && n.rpData.aadInfo.siteUrl && (n.rpData.aadInfo.siteUrl = a(n.rpData.aadInfo.siteUrl)), n.rpData.msaInfo && n.rpData.msaInfo.meUrl && (n.rpData.msaInfo.meUrl = n.rpData.msaInfo.meUrl + "&wreply=" + encodeURIComponent(window.location.protocol + "//" + window.location.host)), n.events = {
                        onEventLog: function (n, t) {
                            if (c && c.onEventLog) c.onEventLog("MeControl_" + n, t);
                            n && (n === "SignIn" || n === "DropdownOpen") && nt.setConsent()
                        }
                    }, t = i.extend(!0, {}, n, t || {}))
                }

                function v(n) {
                    n != null && n.events != null && (c = n.events);
                    n.currentGlobalItemId && r.NavigationMenus.setCurrentMenuItemId(n.currentGlobalItemId);
                    n.currentMenuItemId && r.NavigationMenus.setCurrentMenuItemId(n.currentMenuItemId);
                    n && n.theme && u.UniversalHeader.setTheme(n.theme)
                }

                function d(n) {
                    var t, i, r;
                    (window.msCommonShell && n.as ? window.msCommonShell.as = n.as : window.msCommonShell && n.searchSuggestCallback && (window.msCommonShell.as = {
                        legacyCallback: n.searchSuggestCallback
                    }), window.msCommonShell && n.events && (window.msCommonShell.events = n.events), t = document.getElementById("meControl"), t) && (i = t.getAttribute("data-signinsettings"), i !== null && (r = JSON.parse(i), r && k(r), n != null ? (v(n), l(n.meControlOptions)) : l(null), h() && (s = !0, window.MSA && window.MSA.MeControl && window.MSA.MeControl.API.setMobileState(1))))
                }

                function h() {
                    return f.Viewports.getViewport() < 5
                }

                function y() {
                    p()
                }

                function p() {
                    return window.MSA && window.MSA.MeControl && (h() && !s ? (s = !0, window.MSA.MeControl.API.setMobileState(1)) : !h() && s && (s = !1, window.MSA.MeControl.API.setMobileState(0))), s
                }

                function g() {
                    var n = {
                        AuthState: {
                            SignedIn: 1,
                            SignedInIdp: 2,
                            NotSignedIn: 3
                        },
                        SupportedAuthIdp: {
                            MSA: "msa",
                            AAD: "aad"
                        },
                        meControlOptions: function () {
                            return t
                        },
                        load: function (n) {
                            d(n)
                        },
                        update: function (n) {
                            v(n)
                        }
                    };
                    window.msCommonShell = i.extend(!0, window.msCommonShell, n);
                    window.msCommonShell.swapCategoryHeader || (window.msCommonShell.swapCategoryHeader = function (n) {
                        window.msCommonShell._catHTML = n
                    });
                    window.onShellReadyToLoad && window.onShellReadyToLoad()
                }
                var t = null,
                    w = 5e3,
                    c = null,
                    s = !1,
                    nt = new o.MsccHelper;
                n.absolutifyUrl = a;
                n.isMobile = h;
                n.onWindowResize = y;
                n.setMeControlMobileState = p;
                n.init = g;
                e.addThrottledEvent(window, e.eventTypes.resize, y, 66)
            })(s = t.Loader || (t.Loader = {}))
        });
        n("uhfPaddles", ["require", "exports", "htmlExtensions"], function (n, t, i) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = ".js-primary-paddle",
                f = ".js-secondary-paddle",
                e = ".js-paddle-items",
                r = "f-hidden",
                o = function () {
                    function n(n) {
                        var t = this;
                        (this.disabledPrimaryNavItems = [], this.disabledSecondaryNavItems = [], this.slidePrimary = function () {
                            t.setCurrentSlidePosition(t.getNextValidPosition(!0))
                        }, this.slideSecondary = function () {
                            t.setCurrentSlidePosition(t.getNextValidPosition(!1))
                        }, this.handleSlideIfDisabled = function (n) {
                            for (var r = 0; r < t.nav.children.length; ++r) t.disabledPrimaryNavItems[r] === n.currentTarget ? (t.slidePrimary(), i.preventDefault(n)) : t.disabledSecondaryNavItems[r] === n.currentTarget && (t.slideSecondary(), i.preventDefault(n))
                        }, this.handleFromKeyboardSlideIfDisabled = function (n) {
                            for (var i = 0; i < t.nav.children.length; ++i)(t.disabledPrimaryNavItems[i] === n.currentTarget || t.disabledSecondaryNavItems[i] === n.currentTarget) && (t.navItemPositions[i] > t.getMaxSlideAmount() ? t.setCurrentSlidePosition(t.getMaxSlideAmount()) : t.setCurrentSlidePosition(t.navItemPositions[i]))
                        }, n) && (this.primaryPaddle = i.selectFirstElement(u, n), this.secondaryPaddle = i.selectFirstElement(f, n), this.nav = i.selectFirstElement(e, n), this.nav) && (this.isLtr = this.nav.currentStyle ? this.nav.currentStyle.direction === "ltr" : getComputedStyle(this.nav, null).direction === "ltr", this.slideMarginProperty = this.isLtr ? "marginLeft" : "marginRight", this.firstMenuItem = this.nav.children[0])
                    }
                    return n.prototype.initializeNavItemsWidths = function () {
                        var t, n;
                        if (this.nav)
                            for (t = this.nav.children, this.navItemsWidth = 0, this.navItemPositions = [], n = 0; n < t.length; ++n) this.navItemPositions.push(this.navItemsWidth), this.navItemsWidth += $(t[n]).outerWidth(!0)
                    }, n.prototype.setCurrentSlidePosition = function (n) {
                        (n < 0 && (n = 0), this.firstMenuItem.style[this.slideMarginProperty] = -n + "px", this.nav) && (this.updatePaddleDisplayStates(), this.disablePartiallyHiddenNavItems(), this.nav.scrollLeft = this.isLtr ? 0 : this.nav.scrollWidth)
                    }, n.prototype.getCurrentSlidePosition = function () {
                        var n = this.firstMenuItem.style[this.slideMarginProperty];
                        return n === "" ? 0 : -parseInt(n, 10)
                    }, n.prototype.show = function (n) {
                        n.style.display = "block"
                    }, n.prototype.hide = function (n) {
                        n.style.display = "none"
                    }, n.prototype.isShowing = function (n) {
                        return n.style.display !== "none"
                    }, n.prototype.disablePartiallyHiddenNavItems = function () {
                        for (var u, t = this.nav.children, e = this.nav.offsetWidth, f = this.getCurrentSlidePosition(), n = 0; n < t.length; ++n) u = t[n].querySelector("button") || t[n], this.navItemPositions[n] < f ? (i.addClass(u, r), this.disabledPrimaryNavItems[n] = t[n]) : this.navItemPositions[n] + t[n].offsetWidth > f + e ? (i.addClass(u, r), this.disabledSecondaryNavItems[n] = t[n]) : (i.removeClass(u, r), this.disabledPrimaryNavItems[n] = null, this.disabledSecondaryNavItems[n] = null)
                    }, n.prototype.updatePaddleDisplayStates = function () {
                        var t = this.nav.offsetWidth,
                            i = t + this.primaryPaddle.offsetWidth + this.secondaryPaddle.offsetWidth,
                            n;
                        i >= this.navItemsWidth ? (this.hide(this.primaryPaddle), this.hide(this.secondaryPaddle)) : (n = this.getCurrentSlidePosition(), n === 0 ? (this.hide(this.primaryPaddle), this.show(this.secondaryPaddle)) : n >= this.getMaxSlideAmount() ? (this.show(this.primaryPaddle), this.hide(this.secondaryPaddle)) : (this.show(this.primaryPaddle), this.show(this.secondaryPaddle)))
                    }, n.prototype.getMaxSlideAmount = function () {
                        var n = this.isShowing(this.primaryPaddle) && this.isShowing(this.secondaryPaddle) ? this.primaryPaddle.offsetWidth : 0,
                            t = this.nav.offsetWidth + n;
                        return this.navItemsWidth - t
                    }, n.prototype.handleWidthChange = function () {
                        if (this.primaryPaddle && this.nav) {
                            var n = this.getCurrentSlidePosition(),
                                t = this.nav.offsetWidth,
                                i = t + this.primaryPaddle.offsetWidth + this.secondaryPaddle.offsetWidth;
                            i > this.navItemsWidth ? this.setCurrentSlidePosition(0) : this.navItemsWidth < n + this.nav.offsetWidth && this.setCurrentSlidePosition(Math.abs(this.nav.offsetWidth - this.navItemsWidth));
                            this.updatePaddleDisplayStates();
                            this.disablePartiallyHiddenNavItems()
                        }
                    }, n.prototype.getNextValidPosition = function (n) {
                        var i = this.getCurrentSlidePosition(),
                            r = this.nav.offsetWidth,
                            t;
                        if (n) {
                            for (t = 0; t < this.navItemPositions.length; ++t)
                                if (this.navItemPositions[t] > i) return Math.max(0, this.navItemPositions[t] - r);
                            return 0
                        }
                        for (t = 0; t < this.navItemPositions.length - 1; ++t)
                            if (this.navItemPositions[t + 1] > i + r) return Math.min(this.getMaxSlideAmount(), this.navItemPositions[t]);
                        return this.getMaxSlideAmount()
                    }, n.prototype.handleMoveIntoDesktopViewport = function () {
                        if (this.primaryPaddle && this.nav) {
                            this.primaryPaddle.tabIndex = -1;
                            this.secondaryPaddle.tabIndex = -1;
                            this.initializeNavItemsWidths();
                            this.updatePaddleDisplayStates();
                            this.disablePartiallyHiddenNavItems();
                            this.firstMenuItem.style.transition = "margin .667s cubic-bezier(.16, 1, .29, .99)";
                            i.addEvent(this.primaryPaddle, i.eventTypes.click, this.slidePrimary);
                            i.addEvent(this.secondaryPaddle, i.eventTypes.click, this.slideSecondary);
                            var n = i.nodeListToArray(this.nav.children);
                            i.addEvent(n, i.eventTypes.click, this.handleSlideIfDisabled);
                            i.addEvent(n, i.eventTypes.focusin, this.handleFromKeyboardSlideIfDisabled)
                        }
                    }, n.prototype.handleMoveIntoMobileViewport = function () {
                        var t, n, u;
                        if (this.primaryPaddle && this.nav) {
                            for (this.hide(this.primaryPaddle), this.hide(this.secondaryPaddle), this.primaryPaddle.tabIndex = 0, this.secondaryPaddle.tabIndex = 0, this.firstMenuItem.style.transition = "", i.removeEvent(this.primaryPaddle, i.eventTypes.click, this.slidePrimary), i.removeEvent(this.secondaryPaddle, i.eventTypes.click, this.slideSecondary), t = i.nodeListToArray(this.nav.children), i.removeEvent(t, i.eventTypes.click, this.handleSlideIfDisabled), i.removeEvent(t, i.eventTypes.focusin, this.handleFromKeyboardSlideIfDisabled), n = 0; n < t.length; ++n) u = t[n].querySelector("button") || t[n], i.removeClass(u, r), this.disabledPrimaryNavItems[n] = null, this.disabledSecondaryNavItems[n] = null;
                            this.firstMenuItem.style[this.slideMarginProperty] = null
                        }
                    }, n
                }();
            t.UhfPaddles = o
        });
        t = this && this.__extends || function () {
            var n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (n, t) {
                    n.__proto__ = t
                } || function (n, t) {
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
                };
            return function (t, i) {
                function r() {
                    this.constructor = t
                }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }();
        t = this && this.__extends || function () {
            var n = Object.setPrototypeOf || {
                __proto__: []
            }
                instanceof Array && function (n, t) {
                    n.__proto__ = t
                } || function (n, t) {
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i])
                };
            return function (t, i) {
                function r() {
                    this.constructor = t
                }
                n(t, i);
                t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype, new r)
            }
        }();
        n("uhfPromoBanner", ["require", "exports", "htmlExtensions", "utility", "publisher"], function (n, i, r, u, f) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            });
            var e = function (n) {
                function i(t) {
                    var f = n.call(this, t) || this;
                    return (f.promoElement = t, f.closeSelector = "#close-epb", f.cookieName = "uhf_hide_epb", f.cookieNameV3 = "msstore_hide_epb", f.hiddenClass = "x-hidden", f.rollupAnimationClass = "epb-rollup", f.telemetryQsp = "epb=1", f.showPromoBanner = function () {
                        var n = r.selectFirstElement("#epbTryNow"),
                            t = r.selectFirstElement(".f-img-lzy"),
                            h = n.getAttribute("data-telem-qsp"),
                            i = r.selectFirstElement(".epb-container"),
                            e, o, s;
                        i && (i.removeAttribute("data-ios"), i.removeAttribute("data-android"), i.removeAttribute("data-windowsedge"));
                        n && (e = u.addQSP(window.location.toString(), f.telemetryQsp), h ? n.setAttribute("href", "Microsoft-edge:" + u.addQSP(e, h)) : n.setAttribute("href", "Microsoft-edge:" + e));
                        t && (o = t.getAttribute("data-src"), o && (t.setAttribute("src", o), t.removeAttribute("data-src")));
                        s = r.selectFirstElement(f.closeSelector, f.promoElement);
                        s && (r.addEvent(s, r.eventTypes.click, f.closeAndSetCookie), r.removeClass(f.promoElement, f.hiddenClass))
                    }, f.showPromoBannerWindowsEdge = function () {
                        var t = r.selectFirstElement("#epbTryNow"),
                            e = r.selectFirstElement(".f-img-lzy"),
                            i = r.selectFirstElement(".epb-container"),
                            s = r.selectFirstElement(".epb-launch"),
                            h = r.selectFirstElement(".epb-text"),
                            c = i.getAttribute("data-windowsedge"),
                            n = JSON.parse(c),
                            o, u;
                        n && (!t || (t.setAttribute("href", n.LinkUrl), t.setAttribute("aria-label", n.ActionAriaLabel), t.innerText = n.ActionText, t.removeAttribute("data-telem-qsp")), !s || (s.innerText = n.Title), !h || (h.innerText = n.Text), r.addClass(i, "epb-container-background"), i.removeAttribute("data-ios"), i.removeAttribute("data-android"), i.removeAttribute("data-windowsedge"), e && (o = e.getAttribute("data-src"), o && (e.setAttribute("src", o), e.removeAttribute("data-src"))), u = r.selectFirstElement(f.closeSelector, f.promoElement), u && (u.innerText = n.DismissText, u.setAttribute("aria-label", n.DismissAriaLabelWindowsEdge), r.addEvent(u, r.eventTypes.click, f.closeAndSetCookie), r.removeClass(f.promoElement, f.hiddenClass)))
                    }, f.getHeight = function () {
                        return f.promoElement ? r.getClientRect(f.promoElement).height : 0
                    }, f.closeAndSetCookie = function () {
                        f.setCookieOnRootDomain(f.cookieName, "true", "/", 7);
                        r.addClass(f.promoElement, f.rollupAnimationClass);
                        r.addEvent(f.promoElement, r.eventTypes.animationend, f.rollUpBanner);
                        f.trackEpbDismissal()
                    }, f.rollUpBanner = function () {
                        r.removeClass(f.promoElement, f.rollupAnimationClass);
                        r.addClass(f.promoElement, f.hiddenClass);
                        f.initiatePublish({
                            height: f.getHeight()
                        })
                    }, !t || !(u.getCookie(f.cookieName) !== "true") || !(u.getCookie(f.cookieNameV3) !== "true")) ? f : i.resolveTreatment("isEdgeOnWindows") ? (f.showPromoBannerWindowsEdge(), f) : i.resolveTreatment("noEdgeWin10") ? (f.showPromoBanner(), f) : f
                }
                return t(i, n), i.resolveTreatment = function (n) {
                    n === void 0 && (n = "noEdgeWin10");
                    switch (n) {
                        case "noEdgeWin10":
                            return i.isNotEdgeWin10();
                        case "gteRs1OnChrome":
                            return i.isGteRs1OnChrome();
                        case "isEdgeOnWindows":
                            return i.isEdgeOnWindows();
                        default:
                            return !1
                    }
                }, i.prototype.setCookieOnRootDomain = function (n, t, i, r) {
                    var e = document.location.hostname.split("."),
                        f = e.pop();
                    if (f === "localhost") u.setCookie(n, t, i, r);
                    else
                        while (u.getCookie(n) !== t && e.length !== 0) f = e.pop() + "." + f, u.setCookie(n, t, i, r, f)
                }, i.prototype.publish = function (n, t) {
                    n.onBannerClosed(t)
                }, i.prototype.trackEpbDismissal = function () {
                    typeof MscomCustomEvent == "function" && window.MscomCustomEvent("wcs.cn", "EdgePromoBannerDismissed", "wcs.cot", 4)
                }, i.isGteRs1OnChrome = function () {
                    var t = document.createElement("canvas").getContext("2d"),
                        i, n;
                    return t.font = "64px Segoe UI Emoji", i = t.measureText("🐱‍👤").width, n = navigator.userAgent.toLowerCase(), !window.chrome || n.indexOf("edge") >= 0 ? !1 : n.indexOf("windows nt") === -1 ? !1 : i <= 90 ? !0 : !1
                }, i.isNotEdgeWin10 = function () {
                    var n = navigator.userAgent.toLowerCase();
                    return !(n.indexOf("edge") >= 0) && n.indexOf("windows nt 10") >= 0
                }, i.isEdgeOnWindows = function () {
                    var n = navigator.userAgent.toLowerCase();
                    return n.indexOf("edge") >= 0
                }, i
            }(f.Publisher);
            i.UhfPromoBanner = e
        });
        n("uhfSearchModule", ["require", "exports", "htmlExtensions", "stringExtensions", "utility", "uhfUssCategoryService", "msccHelper", "uhfTelemetryHelper"], function (n, t, i, r, u, f, e, o) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = new e.MsccHelper,
                h = function () {
                    function n(n, t, e) {
                        var h = this,
                            c, l, a;
                        if (this.searchForm = n, this.showCallback = t, this.autoSuggest = e, this.width = "", this.searchOpenedClass = "f-search-opened", this.focusedClass = "js-focused", this.stSelector = ".c-sgl-stck", this.searchLabelSelector = "#search span", this.ussCategoryExpId = "StoreSearch", this.ussCategoryCtrlId = "AllSearch", this.onSearchBoxChange = function () {
                            h.searchBox.value.trim() !== "" && s.setConsent()
                        }, this.log = function () {
                            if (window.msCommonShell) {
                                (typeof window.msCommonShell.events == "undefined" || typeof window.msCommonShell.events.onSearch == "undefined") && (window.msCommonShell.events = {
                                    onSearch: function () {
                                        if (event.type) {
                                            var n = document.getElementById("cli_shellHeaderSearchInput"),
                                                t = {
                                                    title: "Search",
                                                    trackType: "manual",
                                                    telemetryType: "jsll",
                                                    event: event.type === "click" ? "CL" : "KE",
                                                    srchq: n ? n.value : ""
                                                };
                                            o.trackEvent(t)
                                        }
                                    }
                                });
                                var n = window.msCommonShell.events.onSearch;
                                n && n(h.searchForm)
                            }
                        }, this.addQsp = function (n, t) {
                            if (n && t) {
                                var i = document.createElement("input");
                                i.setAttribute("type", "hidden");
                                i.setAttribute("name", n);
                                i.setAttribute("value", t);
                                i.setAttribute("data-bi-dnt", "");
                                h.searchForm.appendChild(i)
                            }
                        }, this.isHidden = function () {
                            return h.singleStackEnabled ? i.css(h.searchBox, "display") === "none" || h.searchBox.getAttribute("aria-expended") === "false" ? !0 : !i.hasClass(h.searchParentElement, h.searchOpenedClass) : u.getWindowWidth() >= 1400 ? !1 : !i.hasClass(h.searchParentElement, h.searchOpenedClass)
                        }, this.showAndFocus = function () {
                            h.showCallback && h.showCallback();
                            i.addClass(h.searchParentElement, h.searchOpenedClass);
                            h.singleStackEnabled && u.getWindowWidth() >= 1400 ? (i.addClass(h.searchButton, "btn-hide-lbl"), i.css(h.searchBox, "display", "block")) : i.css(h.searchBox, "width", h.width);
                            h.searchCloseButton.setAttribute("aria-expanded", "true");
                            h.searchBox.focus()
                        }, this.hide = function () {
                            h.autoSuggest && h.autoSuggest.hide();
                            i.css(h.searchBox, "width", "");
                            i.removeClass(h.searchParentElement, h.searchOpenedClass);
                            h.searchCloseButton.setAttribute("aria-expanded", "false");
                            h.singleStackEnabled && u.getWindowWidth() >= 1400 && (i.removeClass(h.searchButton, "btn-hide-lbl"), i.css(h.searchBox, "display", "none"))
                        }, this.handleSearchButtonClick = function (n) {
                            if (!h.isHidden()) {
                                h.onSearch(n);
                                return
                            }
                            i.preventDefault(n);
                            h.showAndFocus()
                        }, this.toggleFocusAndClickListeners = function (n, t, r) {
                            var u = r ? i.removeEvent : i.addEvent;
                            u(n, i.eventTypes.focus, t, !0);
                            u(n, i.eventTypes.click, t, !0)
                        }, this.focusInHandler = function () {
                            i.addClass(h.searchForm, h.focusedClass);
                            h.toggleFocusAndClickListeners(h.searchForm, h.focusInHandler, !0);
                            h.toggleFocusAndClickListeners(document.body, h.focusOutHandler)
                        }, this.focusOutHandler = function (n) {
                            h.parentHasClass(n.target, h.focusedClass) || (i.removeClass(h.searchForm, h.focusedClass), h.toggleFocusAndClickListeners(document.body, h.focusOutHandler, !0), h.toggleFocusAndClickListeners(h.searchForm, h.focusInHandler), h.autoSuggest && h.autoSuggest.hide(), h.hide())
                        }, this.parentHasClass = function (n, t) {
                            if (n) {
                                if (i.hasClass(n, t)) return !0
                            } else return !1;
                            return h.parentHasClass(n.parentNode, t)
                        }, n) {
                            this.searchBox = i.selectFirstElement("input", this.searchForm);
                            try {
                                c = window._pageBITags.pageTags;
                                l = c.expId.toLowerCase().split(",");
                                this.ussCategoryExpEnabled = l.indexOf("ex:" + this.ussCategoryExpId.toLowerCase()) > -1;
                                this.ussCategoryCtrlEnabled = l.indexOf("ex:" + this.ussCategoryCtrlId.toLowerCase()) > -1;
                                this.market = c.mkt
                            } catch (v) {
                                this.ussCategoryExpEnabled = !1
                            }
                            this.ussCategoryExpEnabled && this.market ? (this.categoryService = new f.UhfUssCategoryService(this.market), i.addDebouncedEvent(this.searchBox, i.eventTypes.keyup, function () {
                                h.categoryService.queryService(r.trim(h.searchBox.value))
                            }, 100), this.addQsp("flt", this.ussCategoryExpId)) : this.ussCategoryCtrlEnabled && this.addQsp("flt", this.ussCategoryCtrlId);
                            this.searchParentElement = i.selectFirstElement(".js-global-head");
                            this.searchButton = i.selectFirstElement("button", this.searchForm);
                            i.addEvent(this.searchButton, i.eventTypes.click, this.handleSearchButtonClick);
                            this.searchCloseButton = i.selectFirstElement(".c-action-trigger.glyph-arrow-htmllegacy");
                            i.addEvent(this.searchCloseButton, i.eventTypes.click, this.hide);
                            i.addEvent(this.searchBox, i.eventTypes.input, this.onSearchBoxChange);
                            this.toggleFocusAndClickListeners(this.searchForm, this.focusInHandler);
                            a = i.selectFirstElement(this.stSelector);
                            this.singleStackEnabled = a !== null;
                            this.searchLabel = i.selectFirstElement(this.searchLabelSelector)
                        }
                    }
                    return n.prototype.onSearch = function (n) {
                        var t = this,
                            u = r.trim(this.searchBox.value),
                            i;
                        return u.length ? this.ussCategoryExpEnabled ? (n.preventDefault(), i = !1, this.categoryService.getCategory(u, function (n) {
                            !i && n && (t.searchForm.setAttribute("action", "/" + t.market + "/store/search/" + n), t.log(), t.searchForm.submit(), i = !0)
                        }), setTimeout(function () {
                            i || (t.log(), t.searchForm.submit(), i = !0)
                        }, 100), !1) : (this.log(), !0) : (n.preventDefault(), this.searchBox.focus(), !1)
                    }, n.prototype.setSearchBoxWidth = function (n) {
                        this.width = n;
                        this.isHidden() || i.css(this.searchBox, "width", n)
                    }, n.prototype.getSearchFormElement = function () {
                        return this.searchForm
                    }, n
                }();
            t.UhfSearchModule = h
        });
        i(["componentFactory", "universalHeader", "uhfMeControl"], function (n, t, i) {
            n.ComponentFactory && n.ComponentFactory.create && (n.ComponentFactory.create([{
                c: t.UniversalHeader
            }]), n.ComponentFactory.create([{
                c: i.UhfMeControl,
                eventToBind: "DOMContentLoaded"
            }]))
        });
        i(["componentFactory", "universalHeader", "uhfMeControl"], function (n, t, i) {
            n.ComponentFactory && n.ComponentFactory.create && (n.ComponentFactory.create([{
                c: t.UniversalHeader
            }]), n.ComponentFactory.create([{
                c: i.UhfMeControl,
                eventToBind: "DOMContentLoaded"
            }]))
        });
        n("jquery", [], function () {
            return jQuery
        });
        n("uhfTelemetryHelper", ["require", "exports"], function (n, t) {
            function u(n) {
                var t = !1;
                if (n) switch (n.trackType) {
                    case "autosuggest":
                        t = i(n);
                        break;
                    case "manual":
                        t = r(n)
                }
                return t
            }

            function i(n) {
                if (n.telemetryType === "jsll") {
                    var t = n.suggestionType,
                        i = t,
                        r = {
                            term: "microsoftterm",
                            product: "microsoftproduct"
                        }[i],
                        u = {
                            behavior: 60,
                            actionType: n.event,
                            contentTags: {
                                cN: r,
                                srchq: n.srchq,
                                srchtype: "auto suggest",
                                asdisplayed: !0,
                                aslinkpos: n.aslinkpos,
                                qrylngth: n.qrylngth,
                                resultselected: n.resultselected
                            }
                        };
                    if (window.awa && window.awa.ct && typeof window.awa.ct.captureContentPageAction == "function") return window.awa.ct.captureContentPageAction(u), !0
                } else if (n.telemetryType === "wedcs" && typeof MscomCustomEvent == "function") return window.MscomCustomEvent("wcs.cn", n.title, "wcs.cot", 4), !0;
                return !1
            }

            function r(n) {
                if (n.telemetryType === "jsll") {
                    var t = {
                        behavior: 61,
                        actionType: n.event,
                        contentTags: {
                            cN: n.title,
                            srchq: n.srchq,
                            srchtype: "manual"
                        }
                    };
                    if (window.awa && window.awa.ct && typeof window.awa.ct.captureContentPageAction == "function") return window.awa.ct.captureContentPageAction(t), !0
                }
                return !1
            }

            function f(n) {
                if (n) {
                    var t = new Image;
                    t.src = n
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            t.trackEvent = u;
            t.trackAutoSuggestEvents = i;
            t.trackManualEvents = r;
            t.fireBeacon = f
        });
        n("uhfUssCategoryService", ["require", "exports"], function (n, t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                function n(n) {
                    this.market = n;
                    this.responseCache = {};
                    this.ajaxCall = function (n, t) {
                        var i = new XMLHttpRequest;
                        i.open("GET", n);
                        i.onreadystatechange = function () {
                            this.readyState === 4 && this.status >= 200 && this.status < 400 && t(this.responseText)
                        };
                        i.send();
                        i = null
                    }
                }
                return n.prototype.getServiceUrl = function (n) {
                    return "https://ussearchprod.trafficmanager.net/services/api/v1.0/store/categories" + ("?clientid=7f27b536-cf6b-4c65-8638-a0f8cbdfca65&scope=games,apps,devices,software&query=" + n + "&markets=" + this.market)
                }, n.prototype.getCachedCategory = function (n) {
                    return this.responseCache[this.getCacheKey(n)]
                }, n.prototype.getCategory = function (n, t) {
                    var i = this.getCachedCategory(n);
                    i ? t(i) : this.queryService(n, t)
                }, n.prototype.queryService = function (n, t) {
                    var i = this;
                    if (!n || this.getCachedCategory(n)) {
                        t && t(null);
                        return
                    }
                    this.ajaxCall(this.getServiceUrl(n), function (n) {
                        try {
                            var r = JSON.parse(n),
                                u = r.categories && r.categories[0],
                                f = r.query;
                            !u || !f.trim() ? t && t(null) : (i.responseCache[i.getCacheKey(f)] = u, t && t(u))
                        } catch (e) {
                            t && t(null)
                        }
                    })
                }, n.prototype.getCacheKey = function (n) {
                    return encodeURIComponent(n.trim().toLowerCase())
                }, n
            }();
            t.UhfUssCategoryService = i
        });
        n("universalHeader", ["require", "exports", "uhfPaddles", "shoppingCart", "uhfSearchModule", "navigationMenus", "htmlExtensions", "utility", "uhfAutoSuggest", "uhfCookieAlert", "uhfPromoBanner", "uhfLanguageToggle", "removeFocus", "uhfCookieAuditor", "uhfGreenId"], function (n, t, i, r, u, f, e, o, s, h, c, l, a, v, y) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var w = ".js-global-head",
                p = ".js-cat-head",
                b = function () {
                    function n() {
                        var t = this,
                            d, b, g, nt, tt;
                        this.hiddenClass = "x-hidden";
                        this.initializeSearch = function () {
                            t.searchElement && (e.addEvent(t.searchElement, e.eventTypes.keydown, t.initializeSearchModule), e.addEvent(t.searchElement, e.eventTypes.click, t.initializeSearchButton))
                        };
                        this.initializeSearchModule = function () {
                            t.searchElement && (t.uhfAutoSuggest == null || t.searchModule == null) && (t.uhfAutoSuggest = new s.UhfAutoSuggest, t.searchModule = new u.UhfSearchModule(t.searchElement, t.setSearchWidth, t.uhfAutoSuggest), e.removeEvent(t.searchElement, e.eventTypes.keydown, t.initializeSearchModule))
                        };
                        this.initializeSearchButton = function (n) {
                            t.initializeSearchModule();
                            t.searchModule.handleSearchButtonClick(n);
                            e.removeEvent(t.searchElement, e.eventTypes.click, t.initializeSearchButton)
                        };
                        this.isSearchBoxHidden = function () {
                            return o.Viewports.getViewport() < 4
                        };
                        this.isMobile = function () {
                            return window.innerWidth < 1024
                        };
                        this.addMinusTabIndex = function () {
                            t.searchBox && t.searchBox.setAttribute("tabindex", "-1")
                        };
                        this.removeMinusTabIndex = function () {
                            t.searchBox && t.searchBox.removeAttribute("tabindex")
                        };
                        this.onWindowResize = function () {
                            t.checkForViewportChange();
                            t.wasMobile || (t.catPaddles.handleWidthChange(), t.globalPaddles.handleWidthChange());
                            t.searchModule && t.setSearchWidth();
                            t.searchModule && t.searchModule.isHidden() ? t.addMinusTabIndex() : t.searchModule && !t.searchModule.isHidden() && t.removeMinusTabIndex();
                            t.updateBannerBufferHeight()
                        };
                        this.initializeMenus = function () {
                            f.NavigationMenus.init();
                            f.NavigationMenus.handleMoveIntoDesktopViewport();
                            t.menuElement && e.removeEvent(t.menuElement, e.eventTypes.click, t.initializeMenus)
                        };
                        this.setSearchWidth = function () {
                            var n = "";
                            if (o.Viewports.getViewport() >= 3 && o.Viewports.getViewport() <= 4) {
                                var i = e.getClientRect(t.globalLogo),
                                    r = e.getClientRect(t.searchModule.getSearchFormElement()),
                                    u = i.right < r.right ? "right" : "left";
                                n = Math.abs(r[u] - i[u]) - 60 + "px"
                            }
                            t.searchModule.setSearchBoxWidth(n)
                        };
                        this.updateBannerBufferHeight = function () {
                            if (e.css(t.headerElement, "position") === "absolute") {
                                var u = parseInt(e.css(t.headerElement, "top"), 10) || 0,
                                    n = t.cookieAlert != null ? t.cookieAlert.getHeight() : 0,
                                    i = t.edgePromoBanner != null ? t.edgePromoBanner.getHeight() : 0,
                                    r = n > i ? n : i;
                                r !== u && t.setHeaderTop(r + "px")
                            }
                        };
                        this.delegateBannerNotification = function (n) {
                            t.setHeaderTop(n.height + "px")
                        };
                        this.swapCategoryHeader = function (n) {
                            if (n) {
                                var r = e.selectFirstElement(p),
                                    u = document.createElement("DIV");
                                u.innerHTML = n;
                                r.parentNode.replaceChild(u.querySelector(p), r);
                                f.NavigationMenus.init();
                                t.catPaddles = new i.UhfPaddles(e.selectFirstElement(p));
                                t.isMobile() ? (f.NavigationMenus.handleMoveIntoMobileViewport(), t.catPaddles.handleMoveIntoMobileViewport()) : (f.NavigationMenus.handleMoveIntoDesktopViewport(), t.catPaddles.handleMoveIntoDesktopViewport())
                            }
                        };
                        this.headerElement = e.selectFirstElement(n.selector);
                        this.globalLogo = e.selectFirstElement(w + " .c-logo");
                        e.removeClass(this.headerElement, "no-js");
                        this.catPaddles = new i.UhfPaddles(e.selectFirstElement(p));
                        this.globalPaddles = new i.UhfPaddles(e.selectFirstElement(w));
                        this.applyFlexClassNameForLegacyBrowsers();
                        this.isMobile() && !this.wasMobile ? (f.NavigationMenus.init(), f.NavigationMenus.handleMoveIntoMobileViewport(), this.wasMobile = !0, this.catPaddles.handleMoveIntoMobileViewport(), this.globalPaddles.handleMoveIntoMobileViewport()) : (this.wasMobile = !1, this.catPaddles.handleMoveIntoDesktopViewport(), this.globalPaddles.handleMoveIntoDesktopViewport(), this.menuElement = e.selectElements(".c-uhf-menu"), !this.menuElement || e.addEvent(this.menuElement, e.eventTypes.click, this.initializeMenus));
                        this.searchElement = e.selectFirstElement(w + "  .c-search");
                        this.searchBox = e.selectFirstElement("input", this.searchElement);
                        this.initializeSearch();
                        this.isSearchBoxHidden() && this.addMinusTabIndex();
                        d = !!e.selectFirstElement("#" + r.ShoppingCart.shoppingCartFrameId);
                        d && new r.ShoppingCart;
                        e.addThrottledEvent(window, e.eventTypes.resize, this.onWindowResize, 66);
                        b = e.selectFirstElement("#uhfCookieAlert");
                        b && (this.cookieAlert = new h.UhfCookieAlert(b), this.cookieAlert.subscribe({
                            onBannerClosed: this.delegateBannerNotification
                        }), this.updateBannerBufferHeight());
                        var it = window.mscc,
                            k = e.selectFirstElement("#epb"),
                            rt = e.hasClass(b, this.hiddenClass) || it && !it.isVisible();
                        (!b || rt) && (this.edgePromoBanner = new c.UhfPromoBanner(k), this.edgePromoBanner.subscribe({
                            onBannerClosed: this.delegateBannerNotification
                        }), this.updateBannerBufferHeight());
                        (!b || rt) && (!k || e.hasClass(k, this.hiddenClass)) && (g = e.selectFirstElement("#swp"), e.removeClass(g, this.hiddenClass));
                        l.UhfLanguageToggle.init();
                        a.setupRemoveFocus();
                        v.UhfCookieAuditor.audit();
                        nt = new y.UhfGreenId;
                        setTimeout(nt.createGreenIdIframe, 6e3);
                        window.msCommonShell = window.msCommonShell || {};
                        tt = window.msCommonShell._catHTML;
                        window.msCommonShell._catHTML = null;
                        window.msCommonShell.swapCategoryHeader = this.swapCategoryHeader.bind(this);
                        this.swapCategoryHeader(tt)
                    }
                    return n.prototype.setHeaderTop = function (n) {
                        e.css(this.headerElement, "top", n)
                    }, n.prototype.checkForViewportChange = function () {
                        var n = this.isMobile();
                        n && !this.wasMobile ? (f.NavigationMenus.init(), f.NavigationMenus.handleMoveIntoMobileViewport(), this.searchModule && this.searchModule.hide(), this.catPaddles.handleMoveIntoMobileViewport(), this.globalPaddles.handleMoveIntoMobileViewport(), this.wasMobile = !0) : !n && this.wasMobile && (f.NavigationMenus.handleMoveIntoDesktopViewport(), this.searchModule && this.searchModule.hide(), this.catPaddles.handleMoveIntoDesktopViewport(), this.globalPaddles.handleMoveIntoDesktopViewport(), this.wasMobile = !1)
                    }, n.setTheme = function (t) {
                        var s = e.selectFirstElement(".c-uhfh.f-transparent"),
                            i, f, o;
                        if (s) {
                            var h = e.selectElements(w + "," + p, s),
                                r = ("theme-" + t).toLowerCase(),
                                c = /theme-(light|light)/,
                                u = c.test(r) ? h[0].className.match(c)[0] : !1;
                            if (!!u && u !== r)
                                for (n.swapLogoImage(r, u), i = 0, f = h; i < f.length; i++) o = f[i], e.removeClass(o, u), e.addClass(o, r)
                        }
                    }, n.swapLogoImage = function (t, i) {
                        var r = e.selectFirstElement(n.logoImageSelector);
                        if (r) {
                            var u = function (n) {
                                return n === "theme-light" ? "gray" : "gray"
                            },
                                f = u(i),
                                o = u(t);
                            r.setAttribute("src", r.src.replace(f, o))
                        }
                    }, n.prototype.applyFlexClassNameForLegacyBrowsers = function () {
                        for (var t, r = document.createElement("p").style, n = 0, i = ["flex", "msFlex", "OFlex", "MozFlex", "WebkitFlex"]; n < i.length; n++)
                            if (t = i[n], r[t] !== undefined) return;
                        e.addClass(this.headerElement, "context-noflex")
                    }, n.selector = ".c-uhfh", n.logoImageSelector = ".c-uhfh > div:first-child .c-logo .c-image", n
                }();
            t.UniversalHeader = b
        })
    }();
entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;"
};
! function (n) {
    n.followPageLabel = "follow-this-page-label";
    n.sharePageLabel = "share-this-page-label";
    n.socialBannerLabel = "social-media-banner-label"
}(Labels || (Labels = {})),
    function (n) {
        n.msCommonShell ? n.msCommonShell.load("") : n.onShellReadyToLoad = function () {
            n.onShellReadyToLoad = null;
            n.msCommonShell.load("")
        }
    }(window)